import React, { useState } from "react";
import Modal from "@/components/Modal";
import { addTeacher } from "@/api/teacherApi";
import OpenAddButton from "@/components/OpenAddButton";
import AddButton from "@/components/AddButton";

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
      <OpenAddButton
        title="Ajouter enseignant"
        handleAdd={() => setIsNewTeacher(() => true)}
      />

      <Modal isOpen={isNewTeacher} onClose={() => setIsNewTeacher(() => false)}>
        <h2 className="font-bold text-center text-cyan-600 my-4">
          Nouveau Enseignant
        </h2>

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
          <AddButton />
        </form>
      </Modal>
    </div>
  );
}

export default NewTeacher;
