"use client";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { deleteCourse } from "@/parameters/courses/_api/courseApi";

function CoursesList({ courses, setCourses }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCourses = courses.filter((course) =>
    course.course_name.toLowerCase().includes(searchTerm.toLowerCase())||
    course.major_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="sm:flex sm:flex-col sm:items-center sm:w-[30rem]">
      {/* Input search */}
      <div className="flex my-2 w-full items-center mb-4">
        <div className="w-full  flex items-center">
          <CiSearch className="text-darkGray absolute ml-3 size-6" />
          <input
            className="bg-white w-full h-10 text-center rounded-md border-[1px] border-gray"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* list */}
      <div className="overflow-auto max-h-[45vh] w-full flex justify-center">
        <table>
          <thead className="mb-3">
            <tr>
              <th className="px-4 sticky top-0 bg-blue-50"></th>
              <th className="px-4 sticky top-0 bg-blue-50">
                Unité d'enseignement
              </th>
              <th className="px-4 sticky top-0 bg-blue-50">Département</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr
                key={course.course_id}
                className="odd:bg-blue-body even:bg-blue-body-secondary hover:opacity-50"
              >
                <td
                  className="whitespace-nowrap px-2 py-3"
                  onClick={() =>
                    deleteCourse(course.course_id, setCourses, courses)
                  }
                >
                  <TiDeleteOutline className="text-xl text-violet-500 cursor-pointer hover:scale-125 " />
                </td>
                <td className="text-center whitespace-nowrap px-2 py-3">{course.course_name}</td>
                <td className="text-center whitespace-nowrap px-2 py-3">{course.major_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoursesList;
