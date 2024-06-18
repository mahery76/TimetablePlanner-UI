"use client";
import React, { useEffect, useState, useContext } from "react";
import { getGroupsDb } from "@/api/groupApi";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IsSideMenuOpenContext } from "@/context/timetableSideMenuContext";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";

function layout({ children }) {
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isGroupListOpen, setIsGroupListOpen] = useState(false);
  const { isMenuOpen, setIsMenuOpen } = useContext(IsSideMenuOpenContext);

  const filteredGroups = groups.filter((group) =>
    group.group_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getGroupsDb().then((data) => {
      setGroups(data);
    });
  }, []);

  return (
    <div className="w-full h-full flex">
      {/* isMenuClosed */}
      <div
        className={` 
      ${isMenuOpen ? "hidden" : ""}
      h-full border-r-2 border-neutral-200 absolute w-[15rem] flex items-center justify-between ml-4 my-4 
      `}
      >
        <div
          className="p-3 cursor-pointer rounded-full bg-neutral-100 hover:bg-neutral-200"
          onClick={() => setIsMenuOpen(() => true)}
        >
          <CiMenuBurger />
        </div>
      </div>

      {/* side menus open*/}
      <div
        className={`
        ${isMenuOpen ? "" : "hidden"}
        h-full border-r-2 border-neutral-200 w-[18.5rem] ml-4 flex flex-col bg-my-white 
        `}
      >
        <div className="flex gap-2">
          {/* close menu button */}
          <div
            className="p-3 my-2 cursor-pointer rounded-full bg-neutral-100 hover:bg-neutral-200"
            onClick={() => setIsMenuOpen(() => false)}
          >
            <MdClose />
          </div>

          {/* search teacher section */}
          <div className="flex my-2 w-full items-center">
            <div className="w-full  flex items-center">
              <CiSearch className="text-darkGray absolute ml-3 size-6" />
              <input
                type="text"
                className="bg-white w-full h-10 text-center rounded-md border-[1px] border-gray"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className=" h-[45vh] w-full">
          <table className="flex flex-col w-full">
            <tbody>
              {filteredGroups.map((group) => (
                <tr
                  className="flex cursor-pointer w-full  border-b-2 border-neutral-200 hover:bg-neutral-100"
                  key={group.group_id}
                  onClick={() => setIsMenuOpen(() => false)}
                >
                  <td className="w-full">
                    <Link
                      href={`/timetable/group/${group.group_id}?group_name=${group.group_name}`}
                    >
                      <div className="whitespace-nowrap px-2 py-3 ">
                        {group.group_name}
                      </div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* timetable of one group */}
      <div
      >
        {children}
      </div>
    </div>
  );
}
export default layout;
