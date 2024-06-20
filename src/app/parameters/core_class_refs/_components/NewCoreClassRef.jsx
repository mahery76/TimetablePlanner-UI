"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { addCore_class_ref } from "@/api/core_class_refsApi";
import AddButton from "@/components/AddButton";

function NewCoreClassRef({ core_class_refs, setCore_class_refs }) {
  const [isNew_Core_class_ref, setIsNew_Core_class_ref] = useState(false);
  const addNewCore_class_ref = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => (object[key] = value));
    addCore_class_ref(
      object,
      setIsNew_Core_class_ref,
      core_class_refs,
      setCore_class_refs
    );
  };
  return (
    <div className="flex justify-center items-center">
      <AddButton
        title="Ajouter référence"
        handleAdd={() => setIsNew_Core_class_ref(() => true)}
      />

      <Modal
        isOpen={isNew_Core_class_ref}
        onClose={() => setIsNew_Core_class_ref(() => false)}
      >
        <h2 className="font-bold text-center text-cyan-600 my-4">
          Nouveau référence
        </h2>

        <form onSubmit={addNewCore_class_ref} className="w-72 p-4">
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
      rounded-md border-[1px] border-gray  text-center"
            type="text"
            name="core_class_ref_name"
            placeholder="Référence du tronc commun"
            required
          />
          <input
            type="submit"
            className=" 
      bg-gradient-to-br from-green-200 to-blue-200 
      py-1.5 rounded-lg cursor-pointer flex w-full justify-center
      "
            value="Ajouter"
          />
        </form>
      </Modal>
    </div>
  );
}

export default NewCoreClassRef;


