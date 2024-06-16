"use client";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { deleteCore_class_ref } from "@/api/core_class_refsApi";
import { CiSearch } from "react-icons/ci";

function CoreClassRefsList({ core_class_refs, setCore_class_refs }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCore_class_ref = core_class_refs.filter((core_class_ref) =>
    core_class_ref.core_class_ref_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  return (
    <div className="sm:flex sm:flex-col sm:items-center sm:w-[30rem]">
      {/* Timeslot input search */}
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

       {/* core_class_refs's list */}
       <div className="overflow-auto h-[45vh] w-full">
        <table className="flex flex-col w-full">
          <thead className="mb-3">
            <tr>
              <th className="px-4 sticky top-0 "></th>
              <th className="px-4 sticky top-0 mx-auto w-full">Références des Activités en Tronc commun</th>
            </tr>
          </thead>
          <tbody>
            {filteredCore_class_ref.map((core_class_ref) => (
              <tr
                key={core_class_ref.core_class_ref_id}
                className="flex w-full odd:bg-neutral-100 "
              >
                <td
                  className="whitespace-nowrap px-2 py-3 my-auto"
                  onClick={() =>
                    deleteCore_class_ref(
                        core_class_ref.core_class_ref_id,
                        setCore_class_refs,
                        core_class_refs
                    )
                  }
                >
                  <TiDeleteOutline className="text-xl text-violet-500 cursor-pointer hover:scale-125 " />
                </td>
                <td>
                  <div className="whitespace-nowrap px-2 py-3">{core_class_ref.core_class_ref_name}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoreClassRefsList;
