"use client";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import Link from "next/link";
import { deleteActivity } from "@/activities/_api/activityApi";
import { CiSearch } from "react-icons/ci";

function ActivitiesList({ activities, setActivities }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredActivities = activities.filter(
    (activity) =>
      activity.group_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.course_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.teacher_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.room_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.core_class_ref_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );
  return (
    <div className="  sm:w-[40rem] md:flex md:flex-col md:items-center  md:w-[50rem] lg:w-[60rem]">
      {/* Activity filter section */}
      <div className="flex my-2 w-full items-center mb-4">
          <CiSearch className="text-darkGray absolute ml-3 size-6" />
          <input
            type="text"
            className="bg-white w-full h-10 text-center rounded-md border-[1px] border-gray"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
      </div>

      <div className="overflow-auto h-[45vh] w-full">
        <table className="w-full">
          <thead className="mb-3 bg-my-white">
            <tr>
              <th className="whitespace-nowrap px-4 sticky top-0 bg-blue-50 ml-0"></th>
              <th className="whitespace-nowrap px-4 sticky top-0 bg-blue-50 ml-0" >Classe</th>
              <th className="whitespace-nowrap px-4 sticky top-0 bg-blue-50 ml-0" >UE</th>
              <th className="whitespace-nowrap px-4 sticky top-0 bg-blue-50 ml-0">Enseignant</th>
              <th className="whitespace-nowrap px-4 sticky top-0 bg-blue-50 ml-0">Salle</th>
              <th className="whitespace-nowrap px-4 sticky top-0 bg-blue-50 ml-0">Réf TC</th>
              <th className="whitespace-nowrap px-4 sticky top-0 bg-blue-50 ml-0">VH</th>
              <th className="whitespace-nowrap px-4 sticky top-0 bg-blue-50 ml-0">VH restantes</th>
            </tr>
          </thead>
          <tbody>
            {filteredActivities.map((activity) => (
              <tr
                key={activity.activity_id}
                className="odd:bg-blue-body even:bg-blue-body-secondary hover:opacity-50"
              >
                <td
                  className="whitespace-nowrap px-2 py-3"
                  onClick={() =>
                    deleteActivity(activity.activity_id, activities, setActivities)
                  }
                >
                  <TiDeleteOutline className="text-xl text-violet-500 cursor-pointer hover:scale-125 " />
                </td>
                <td className="whitespace-nowrap px-4 py-3">{activity.group_name}</td>
                <td className="whitespace-nowrap px-4 py-3">{activity.course_name}</td>
                <td className="whitespace-nowrap px-4 py-3">{activity.teacher_name}</td>
                <td className="whitespace-nowrap px-4 py-3">{activity.room_name}</td>
                <td className="whitespace-nowrap px-4 py-3">{activity.core_class_ref_name}</td>
                <td className="whitespace-nowrap px-4 py-3">{activity.activity_hours}</td>
                <td className="whitespace-nowrap px-4 py-3">{activity.activity_remaining_hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivitiesList;
