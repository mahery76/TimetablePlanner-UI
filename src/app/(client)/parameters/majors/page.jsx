"use client";
import React, { useEffect, useState } from "react";
import { getAllMajors } from "@/parameters/majors/_api/majorsApi";
import MajorsList from "./_components/MajorsList";
import NewMajor from "./_components/NewMajor"
function Major() {
  const [majors, setMajors] = useState([]);
  useEffect(() => {
    getAllMajors(setMajors);
  }, []);
  return (
    <div>
      <div className="mt-6">
        <MajorsList majors={majors} setMajors={setMajors} />
      </div>
      <div className="mt-8">
        <NewMajor majors={majors} setMajors={setMajors}/>
      </div>
    </div>
  );
}
export default Major;
