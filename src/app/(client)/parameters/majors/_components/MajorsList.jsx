"use client";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { deleteMajor } from "../_api/majorsApi";

function MajorsList({ majors, setMajors }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredMajors = majors.filter((major) =>
    major.major_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="sm:flex sm:flex-col sm:items-center sm:w-[30rem]">
      {/* major input search */}
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
      {/* majors's list */}
      <div className="overflow-auto h-[45vh] w-full">
        <table className="flex flex-col w-full">
          <thead className="mb-3">
            <tr>
              {/* for the delete button column */}
              <th className="px-4 sticky top-0 bg-blue-50"></th>
              <th className="px-4 sticky top-0 bg-blue-50 mx-auto w-full">Nom</th>
            </tr>
          </thead>
          <tbody>
            {filteredMajors.map((major) => (
              <tr
                key={major.major_id}
                className=" flex w-full odd:bg-blue-body even:bg-blue-body-secondary hover:opacity-50"
              >
                <td
                  className="whitespace-nowrap px-2 py-2 my-auto"
                  onClick={() => deleteMajor(major.major_id, setMajors, majors)}
                >
                  <TiDeleteOutline className="text-xl text-violet-500 cursor-pointer hover:scale-125 " />
                </td>
                <td>
                  <div className="whitespace-nowrap px-2 py-3">
                    {major.major_name}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MajorsList;
