"use client";
import React, { useEffect, useState } from "react";
import { getGroupsDb } from "@/parameters/groups/_api/groupApi";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import Modal from "./_components/Modal";
import { RxHamburgerMenu } from "react-icons/rx";
function layout({ children }) {
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isGroupListOpen, setIsGroupListOpen] = useState(false);

  const filteredGroups = groups.filter((group) =>
    group.group_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getGroupsDb().then((data) => {
      setGroups(data);
    });
  }, []);

  return (
    <div className="absolute flex w-full px-4 mt-6 justify-between">
      {/* side menus */}

      <div
        className="p-3 h-[3rem]
        flex justify-center items-center 
          bg-lightGray rounded-full px-4 flex hover:bg-gradient-to-r from-cyan-400 to-green-primary cursor-pointer
        "
        onClick={() => setIsGroupListOpen(() => true)}
      >
        <RxHamburgerMenu />
      </div>

      <Modal
        isOpen={isGroupListOpen}
        onClose={() => setIsGroupListOpen(() => false)}
      >
        <h2 className="font-bold text-center text-cyan-600 my-4">
          Choisir une classe
        </h2>
        <div className=" flex w-full flex-col sm:items-center sm:w-[20rem] bg-my-white">
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

          <div className="overflow-auto h-[45vh] w-full">
            <table className="flex flex-col w-full">
              <tbody>
                {filteredGroups.map((group) => (
                  <tr
                    className="flex cursor-pointer w-full odd:bg-blue-body even:bg-blue-body-secondary hover:opacity-50"
                    key={group.group_id}
                    onClick={() => setIsGroupListOpen(() => false)}
                  >
                    <Link
                      href={`/timetable/group/${group.group_id}?group_name=${group.group_name}`}
                    >
                      <td>
                        <div className="whitespace-nowrap px-2 py-3 ">
                          {group.group_name}
                        </div>
                      </td>
                    </Link>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>

      {/* timetable of one group */}
      <div className="">
        <div>{children}</div>
      </div>
    </div>
  );
}
export default layout;
