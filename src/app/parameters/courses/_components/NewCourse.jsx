"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { addCourse } from "@/api/courseApi";
import OpenAddButton from "@/components/OpenAddButton";
import AddButton from "@/components/AddButton";

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
      <OpenAddButton
        title="Ajouter unité d'enseignement"
        handleAdd={() => setIsNewCourse(() => true)}
      />
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
         <label htmlFor="major_id" className="text-darkGray text-sm">Département</label>

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

       <AddButton />
        </form>
      </Modal>
    </div>
  );
}

export default NewCourse;
