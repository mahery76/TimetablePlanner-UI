"use client";
import React, { useEffect, useState } from "react";
import NewTeacher from "./_components/NewTeacher";
import TeachersList from "./_components/TeachersList";
import { getAllteacher } from "./_api/teacherApi";
function Teachers({ children }) {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
      getAllteacher(setTeachers);
    }, []);
  return (
    <div>
      <NewTeacher teachers={teachers} setTeachers={setTeachers}/>
      <TeachersList teachers={teachers} setTeachers={setTeachers}/>
      {/*   teacher availabilities section */}
      <div className="mt-2">
        <h2>Les disponibilités des Enseignants</h2>
        {children}
      </div>
    </div>
  );
}

export default Teachers;
