"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { addMajor } from "@/parameters/majors/_api/majorsApi";

function NewMajor({ majors, setMajors }) {
  const [isNewMajor, setIsNewMajor] = useState(false);
  const addNewMajor = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => (object[key] = value));
    addMajor(object, setIsNewMajor, majors, setMajors);
  };
  return (
    <div>
      <button
        className="flex w-full items-center justify-center p-0.5 overflow-hidden
        rounded-lg group bg-gradient-to-br from-green-primary to-blue-secondary
        group-hover:from-green-primary group-hover:to-blue-primary "
        onClick={() => setIsNewMajor(() => true)}
      >
        <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Ajouter département
        </span>
      </button>
      <Modal
        isOpen={isNewMajor}
        onClose={() => setIsNewMajor(() => false)}
      >
        <h2 className="font-bold text-center text-cyan-600 my-4">
          Nouveau département
        </h2>

        <form onSubmit={addNewMajor} className="w-72 p-4">
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
      rounded-md border-[1px] border-gray  text-center"
            type="text"
            name="major_name"
            placeholder="Intervale du créneaux"
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

export default NewMajor;
