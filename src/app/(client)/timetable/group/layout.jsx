"use client";
import React, { useEffect, useState } from "react";
import { getGroupsDb } from "@/parameters/groups/_api/groupApi";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

function layout({ children }) {
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);
  const [isMediumScreen, setIsMediumScreen] = useState(false)

  const filteredGroups = groups.filter((group) =>
    group.group_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getGroupsDb().then((data) => {
      setGroups(data);
    });
  }, []);

  return (
    <div>
      {/* side menus */}

      {isSideMenuOpen && (
        <div className="sm:flex sm:flex-col sm:items-center sm:w-[30rem]">
          <button onClick={() => setIsSideMenuOpen(() => false)}>Close</button>

          <div className="flex my-2 w-full items-center mb-4">
            <div className="w-full  flex items-center">
              <CiSearch className="text-darkGray absolute ml-3 size-6" />
              <input
                type="text"
                className="bg-white w-full h-10 text-center rounded-md border-[1px] border-gray"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filteredGroups.map((group) => (
            <div
              key={group.group_id}
              onClick={() => setIsSideMenuOpen(() => false)}
            >
              <Link
                href={`/timetable/group/${group.group_id}?group_name=${group.group_name}`}
              >
                {group.group_name}
              </Link>
            </div>
          ))}
        </div>
      )}

      {!isSideMenuOpen && (
        <div>
          <button onClick={() => setIsSideMenuOpen(() => true)}>Open</button>
          {/* timetable */}
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}
export default layout;
