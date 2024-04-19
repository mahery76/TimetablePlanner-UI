"use client";
import React, { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import Link from "next/link";
import { deleteTeacher } from "../_api/teacherApi";
import { CiSearch } from "react-icons/ci";

function TeachersList({ teachers, setTeachers }) {
  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <div className="flex my-2 w-full justify-center items-center">
        <div className="w-full sm:w-80 flex items-center">
          <CiSearch className="text-darkGray absolute ml-3 size-6" />
          <input
            type= "text"
            className="bg-white w-full  h-10 text-center rounded-md border-2 border-gray"
          />
        </div>
      </div>
      <div className="overflow-auto max-h-[60vh]">
        <table>
          <thead>
            <tr>
              <th className="px-4 sticky top-0 bg-lightGray"></th>
              <th className="px-4 sticky top-0 bg-lightGray">Nom</th>
              <th className="px-4 sticky top-0 bg-lightGray">Titre</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.teacher_id}>
                <td
                  className="whitespace-nowrap px-2 py-2"
                  onClick={() =>
                    deleteTeacher(teacher.teacher_id, setTeachers, teachers)
                  }
                >
                  <TiDeleteOutline className="text-xl text-violet-500 cursor-pointer hover:scale-125 " />
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link href={`/parameters/teachers/${teacher.teacher_id}`}>
                    {teacher.teacher_name}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link href={`/parameters/teachers/${teacher.teacher_id}`}>
                    {teacher.teacher_title}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeachersList;
