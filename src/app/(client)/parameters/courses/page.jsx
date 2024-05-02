"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/_lib/indexedDb";
import { useRouter } from "next/navigation";
import {getAllCourses} from "./_api/courseApi"
import CoursesList from "./_components/CoursesList"
import NewCourse from "./_components/NewCourse"

function courses() {
  const [courses, setCourses] = useState([])
  const [majors, setMajors] = useState([])
  const router = useRouter()
  useEffect(() => {
    getAllCourses(setCourses)
    db.majors.toArray().then(setMajors)
  },[])
  return (
    <div>
      <div className="mt-6">
        <CoursesList courses={courses} setCourses={setCourses}/>
      </div>
      <div className="mt-8">
        <NewCourse router={router} majors={majors} />
      </div>
    </div>
  )
}

export default courses