"use client";
import React, { useEffect, useState, useContext } from "react";
import { getGroupsDb } from "@/api/groupApi";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import Modal from "@/components/Modal";
import { RxHamburgerMenu } from "react-icons/rx";
import { IsSideMenuOpenContext } from "@/context/timetableSideMenuContext";

function layout({ children}) {
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isGroupListOpen, setIsGroupListOpen] = useState(false);
  const {isMenuOpen, setIsMenuOpen} = useContext(IsSideMenuOpenContext)

  const filteredGroups = groups.filter((group) =>
    group.group_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getGroupsDb().then((data) => {
      setGroups(data);
    });
  }, []);

  return (
    <div className="absolute mt-4 md:mx-4 gap-2 flex w-full">
      {/* side menus */}

      <div
        className={`
        ${isMenuOpen ? "" : "hidden"}
        w-[15rem] mt-16 flex flex-col bg-my-white
        `}
      >
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
        <div className=" h-[45vh] w-full">
          <table className="flex flex-col w-full">
            <tbody>
              {filteredGroups.map((group) => (
              <Link
                href={`/timetable/group/${group.group_id}?group_name=${group.group_name}`}
              >
                <tr
                  className="flex cursor-pointer w-full  border-b-2 border-neutral-300 hover:bg-neutral-100"
                  key={group.group_id}
                  onClick={() => setIsGroupListOpen(() => false)}
                >
                    <td>
                      <div className="whitespace-nowrap px-2 py-3 ">
                        {group.group_name}
                      </div>
                    </td>
                </tr>
                  </Link>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* timetable of one group */}
      <div className="ml-12">{children}</div>
    </div>
  );
}
export default layout;
