import React, { useState } from "react";
import Modal from "./Modal";
import { addTeacher } from "@/parameters/teachers/_api/teacherApi";
function NewTeacher({ teachers, setTeachers }) {
  const [isNewTeacher, setIsNewTeacher] = useState(false);

  const addNewTeacher = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => (object[key] = value));
    addTeacher(object, setIsNewTeacher, teachers, setTeachers);
  };

  return (
    <div className="flex justify-center items-center">

      <button
        className="flex w-full  items-center justify-center p-0.5  overflow-hidden rounded-lg group 
        bg-gradient-to-br from-green-primary to-blue-secondary group-hover:from-green-primary group-hover:to-blue-primary "
        onClick={() => setIsNewTeacher(() => true)}
      >
        <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Ajouter enseignant
        </span>
      </button>

      <Modal isOpen={isNewTeacher} onClose={() => setIsNewTeacher(() => false)}>
        <h2 className="font-bold text-center text-cyan-600 my-4">Nouveau Enseignant</h2>

        <form onSubmit={addNewTeacher} className="w-72 p-4">
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
            rounded-md border-[1px] border-gray  text-center"
            type="text"
            name="teacher_name"
            placeholder="Nom de l'Enseignant"
            required
          />
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 rounded-md border-[1px] border-gray  text-center"
            type="text"
            name="teacher_title"
            placeholder="Titre de l'Enseignant"
            required
          />
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

export default NewTeacher;
