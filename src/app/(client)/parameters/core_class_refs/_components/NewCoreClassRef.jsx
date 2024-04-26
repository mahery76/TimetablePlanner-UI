"use client"
import React, { useState } from 'react'
import Modal from "./Modal";
import { addCore_class_ref } from '../_api/core_class_refsApi';

function NewCoreClassRef({ core_class_refs, setCore_class_refs }) {
    const [isNew_Core_class_ref, setIsNew_Core_class_ref] = useState(false)
    const addNewCore_class_ref = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form)
        const object = {}
        data.forEach((value, key) => (object[key] = value));
        addCore_class_ref(object, setIsNew_Core_class_ref, core_class_refs, setCore_class_refs)
    }
  return (
    <div className="flex justify-center items-center">
      <button
        className="flex w-full  items-center justify-center p-0.5  overflow-hidden rounded-lg group 
  bg-gradient-to-br from-green-primary to-blue-secondary group-hover:from-green-primary group-hover:to-blue-primary "
        onClick={() => setIsNew_Core_class_ref(() => true)}
      >
        <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Ajouter référence
        </span>
      </button>

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
      bg-gradient-to-br from-green-primary to-blue-secondary 
      py-1.5 rounded-lg cursor-pointer flex w-full justify-center text-my-white
      "
            value="Ajouter"
          />
        </form>
      </Modal>
    </div>
  )
}

export default NewCoreClassRef