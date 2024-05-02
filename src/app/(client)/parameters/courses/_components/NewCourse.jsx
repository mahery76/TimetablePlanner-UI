"use client";
import React, { useState } from "react";
import Modal from "./Modal";
// import { addCourse } from "../_api/courseApi";
import { addCourse } from "@/parameters/courses/_api/courseApi";
function NewCourse({ majors }) {
  const [isNewCourse, setIsNewCourse] = useState(false);
  const handleSubmit = (event) => {
    const form = event.target;
    const data = new FormData(form);
    const courseData = {};
    data.forEach((value, key) => (courseData[key] = value));
    addCourse(courseData);
  };
  return (
    <div className="flex justify-center items-center">
      <button
        className="flex w-full  items-center justify-center p-0.5  overflow-hidden rounded-lg group 
                      bg-gradient-to-br from-green-primary to-blue-secondary group-hover:from-green-primary group-hover:to-blue-primary "
        onClick={() => setIsNewCourse(() => true)}
      >
        <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Ajouter unité d'enseignement
        </span>
      </button>
      <Modal isOpen={isNewCourse} onClose={() => setIsNewCourse(() => false)}>
        <h2 className="font-bold text-center text-cyan-600 my-4">
          Nouvelle unité d'enseignement
        </h2>

        <form onSubmit={handleSubmit} className="w-72 p-4">
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
                          rounded-md border-[1px] border-gray  text-center"
            type="text"
            name="course_name"
            placeholder="unité d'enseignement"
            required
          />
          <select
            name="major_id"
            id=""
            className="bg-my-white w-full bg-gray-100 mb-6 py-1.5 
                          rounded-md border-[1px] border-gray  text-center"
          >
            {majors.map((major) => (
              <option key={major.major_id} value={major.major_id}>
                {major.major_name}
              </option>
            ))}
          </select>

          <input
            type="submit"
            className=" 
                        bg-gradient-to-br from-green-primary to-blue-secondary 
                        py-1.5 rounded-lg cursor-pointer flex w-full justify-center text-my-white
                        "
            value="Ajouter"
          />
        </form>
      </Modal>
    </div>
  );
}

export default NewCourse;
