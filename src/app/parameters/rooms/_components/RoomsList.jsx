"use client";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { deleteRoom } from "@/api/roomApi";

function RoomsList({ rooms, setRooms }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRooms = rooms.filter(
    (room) =>
    room.room_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="sm:flex sm:flex-col sm:items-center sm:w-[30rem]">
      {/* rooms input search */}

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
      {/* rooms list */}
      <div className="overflow-auto h-[45vh] w-full ">
        <table className="w-full">
          <thead className="mb-3">
            <tr>
              {/* for the delete button column */}
              <th className="px-4 sticky top-0 "></th>
              <th className="px-4 sticky top-0 ">Salles</th>
              <th className="px-4 sticky top-0 ">Capacité</th>
            </tr>
          </thead>
          <tbody>
            {filteredRooms.map((room) => (
              <tr
                key={room.room_id}
                className="odd:bg-neutral-100 "
              >
                <td
                  className="whitespace-nowrap px-2 py-2"
                  onClick={() => deleteRoom(room.room_id, setRooms, rooms)}
                >
                  <TiDeleteOutline className="text-xl text-violet-500 cursor-pointer hover:scale-125 " />
                </td>
                <td className="whitespace-nowrap px-2 py-3">{room.room_name}</td>
                <td className="whitespace-nowrap px-2 py-3 text-center">{room.room_capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RoomsList;
