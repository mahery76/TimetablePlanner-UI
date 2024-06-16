"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { addTimeslot } from "@/api/timeslotsApi";
import AddButton from "@/parameters/_components/AddButton";

function NewTimeslot({ timeslots, setTimeslots }) {
  const [isNewTimeslot, setIsNewTimeslot] = useState(false);
  
  const addNewTimeslot = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => (object[key] = value));
    addTimeslot(object, setIsNewTimeslot, timeslots, setTimeslots);
  };

  return (
    <div className="flex justify-center items-center">
     <AddButton
        title="Ajouter créneaux"
        handleAdd={() => setIsNewTimeslot(() => true)}
      />

      <Modal
        isOpen={isNewTimeslot}
        onClose={() => setIsNewTimeslot(() => false)}
      >
        <h2 className="font-bold text-center text-cyan-600 my-4">
          Nouveau Créneau
        </h2>

        <form onSubmit={addNewTimeslot} className="w-72 p-4">
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
      rounded-md border-[1px] border-gray  text-center"
            type="text"
            name="timeslot_value"
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
export default NewTimeslot;
