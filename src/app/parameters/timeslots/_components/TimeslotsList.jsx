"use client";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { deleteTimeslot } from "@/api/timeslotsApi";
import { CiSearch } from "react-icons/ci";

function TimeslotsList({ timeslots, setTimeslots }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTimeslots = timeslots.filter(
    (timeslot) =>
      timeslot.timeslot_value.toLowerCase().includes(searchTerm.toLowerCase())
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

    {/* timeslots's list */}
      <div className="overflow-auto h-[45vh] w-full">
        <table className="flex flex-col w-full">
          <thead className="mb-3 sticky top-0 bg-white z-20">
            <tr>
              {/* for the delete button column */}
              <th className="px-4 sticky top-0 "></th>
              <th className="px-4 sticky top-0   mx-auto w-full">Créneaux</th>
            </tr>
          </thead>
          <tbody>
            {filteredTimeslots.map((timeslot) => (
              <tr
                key={timeslot.timeslot_id}
                className=" flex w-full odd:bg-neutral-100 "
              >
                <td
                  className="whitespace-nowrap px-2 py-2 my-auto"
                  onClick={() =>
                    deleteTimeslot(
                      timeslot.timeslot_id,
                      setTimeslots,
                      timeslots
                    )
                  }
                >
                  <TiDeleteOutline className="text-xl text-violet-500 cursor-pointer hover:scale-125 " />
                </td>
                <td>
                  <div className="whitespace-nowrap px-2 py-3">{timeslot.timeslot_value}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TimeslotsList;
