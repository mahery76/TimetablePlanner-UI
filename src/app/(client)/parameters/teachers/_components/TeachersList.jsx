"use client";
import React, { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import Link from "next/link";
import { deleteTeacher } from "../_api/teacherApi";
import { CiSearch } from "react-icons/ci";

function TeachersList({ teachers, setTeachers }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.teacher_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.teacher_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sm:flex sm:flex-col sm:items-center w-full">
      {/* Teacher input search */}
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

      <div className="overflow-auto max-h-[50vh] w-full">
        <table>
          <thead>
            <tr>
              <th className="px-4 sticky top-0 bg-blue-50"></th>
              <th className="px-4 sticky top-0 bg-blue-50">Nom</th>
              <th className="px-4 sticky top-0 bg-blue-50">Titre</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeachers.map((teacher) => (
              <tr key={teacher.teacher_id} className="odd:bg-my-white even:bg-lightGray hover:bg-green-primary hover:opacity-100">
                <td
                  className="whitespace-nowrap px-2 py-2" 
                  onClick={() =>
                    deleteTeacher(teacher.teacher_id, setTeachers, teachers)
                  }
                >
                  <TiDeleteOutline className="text-xl text-violet-500 cursor-pointer hover:scale-125 " />
                </td>
                <td className="whitespace-nowrap mx-4 my-2">
                  <Link href={`/parameters/teachers/${teacher.teacher_id}`}
                  className="flex">
                    {teacher.teacher_name}
                  </Link>
                </td>
                <td className="whitespace-nowrap mx-4 my-2">
                  <Link href={`/parameters/teachers/${teacher.teacher_id}`}
                  className="flex">
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
