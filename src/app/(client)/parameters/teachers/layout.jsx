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
      <div className="mt-6">
        <TeachersList teachers={teachers} setTeachers={setTeachers} />
      </div>
      <div className="mt-8">
        <NewTeacher teachers={teachers} setTeachers={setTeachers} />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Teachers;
