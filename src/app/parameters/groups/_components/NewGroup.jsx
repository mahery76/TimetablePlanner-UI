"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { addGroup } from "@/api/groupApi";
import { useRouter } from "next/navigation";
import OpenAddButton from "@/components/OpenAddButton";
import AddButton from "@/components/AddButton";

function NewGroup({ majors }) {
  const [isNewGroup, setIsNewGroup] = useState(false);
  const router = useRouter();

  const handleSubmit = (event) => {
    // event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const groupData = {};
    data.forEach((value, key) => (groupData[key] = value));
    addGroup(groupData, router);
  };

  return (
    <div className="flex justify-center items-center">

      <OpenAddButton
        title="Ajouter classe"
        handleAdd={() => setIsNewGroup(() => true)}
      />
      
      <Modal isOpen={isNewGroup} onClose={() => setIsNewGroup(() => false)}>
        <h2 className="font-bold text-center text-cyan-600 my-4">
          Nouvelle Classe
        </h2>

        <form onSubmit={handleSubmit} className="w-72 p-4">
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
                        rounded-md border-[1px] border-gray  text-center"
            type="text"
            name="group_name"
            placeholder="Nom de la classe"
            required
          />
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
                        rounded-md border-[1px] border-gray  text-center"
            type="number"
            name="group_size"
            placeholder="Effectif"
            required
          />
          <label htmlFor="major_id" className="text-darkGray text-sm">
            Département
          </label>

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

export default NewGroup;
