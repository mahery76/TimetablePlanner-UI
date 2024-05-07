"use client";
import React, { useEffect, useState } from "react";
import { getGroupsDb } from "@/parameters/groups/_api/groupApi";
import Link from "next/link";

function layout({ children }) {
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

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
        <div className="">
          <button onClick={() => setIsSideMenuOpen(() => false)}>Close</button>
          <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
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
