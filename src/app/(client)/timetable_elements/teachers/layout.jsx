"use client";
import React, { Children, useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { db } from "../../_lib/indexedDb";
import Link from "next/link";
function Teachers({ children }) {
  // this insert all default data to indexedDb

  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    db.teachers.toArray().then(setTeachers);
  }, []);
  return (
    <div className="">
      {/*   new teacher creation section */}
      {/* <div className="insertion">
        <h2>Créer nouvel Enseignant</h2>
      </div> */}

      {/*   Teachers list section */}
      <h2>Listes des Enseignants</h2>
      <div className="overflow-x-auto">
        <table className="">
          <thead>
            <tr>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Titre</th>
            </tr>
          </thead>

          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.teacher_id}>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    href={`/timetable_elements/teachers/${teacher.teacher_id}`}
                  >
                    {teacher.teacher_name}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    href={`/timetable_elements/teachers/${teacher.teacher_id}`}
                  >
                    {teacher.teacher_title}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-2 py-2">
                  <FaTrash />
                </td>
                <td className="whitespace-nowrap px-2 py-2">
                  <FaEdit />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*   teacher availabilities section */}
      <div className="mt-4">
        <h2>Les disponibilités des Enseignants</h2>
        {children}
      </div>
    </div>
  );
}

export default Teachers;
