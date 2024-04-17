import React, { useState } from "react";
import Modal from "./Modal";
import { addTeacher } from "../_api/teacherApi";
function NewTeacher({teachers, setTeachers}) {
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
    <div className="flex justify-center flex-col">
      <button
        className="bg-violet-100 p-2 rounded-md"
        onClick={() => setIsNewTeacher(() => true)}
      >
        Ajouter enseignant
      </button>
      <Modal isOpen={isNewTeacher} onClose={() => setIsNewTeacher(() => false)}>
        <h2 className="font-bold text-center mb-8">Nouveau Enseignant</h2>

        <form onSubmit={addNewTeacher}>
          <input
            className="w-full bg-gray-100 mb-6 py-1.5 rounded-lg  text-center"
            type="text"
            name="teacher_name"
            placeholder="Nom de l'Enseignant"
          />
          <input
            className="w-full bg-gray-100 mb-6 py-1.5 rounded-lg  text-center"
            type="text"
            name="teacher_title"
            placeholder="Titre de l'Enseignant"
          />
          <input
            type="submit"
            onClick={() => addNewTeacher}
            className="w-full bg-violet-100 py-1.5 rounded-lg"
            value="Ajouter"
          />
        </form>
      </Modal>
    </div>
  );
}

export default NewTeacher;
