"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { addRoom } from "@/api/roomApi";
import OpenAddButton from "@/components/OpenAddButton";
import AddButton from "@/components/AddButton";

function NewRoom({ rooms, setRooms }) {
  const [isNewRoom, setIsNewRoom] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const roomObject = {};
    data.forEach((value, key) => (roomObject[key] = value));
    addRoom(roomObject, setIsNewRoom, rooms, setRooms);
  };

  return (
    <div>
      <OpenAddButton
        title="Ajouter salle"
        handleAdd={() => setIsNewRoom(() => true)}
      />

      <Modal isOpen={isNewRoom} onClose={() => setIsNewRoom(() => false)}>
        <h2 className="font-bold text-center text-cyan-600 my-4">
          Nouveau Salle
        </h2>

        <form onSubmit={handleSubmit} className="w-72 p-4">
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
      rounded-md border-[1px] border-gray  text-center"
            type="text"
            name="room_name"
            placeholder="Nom de salle"
            required
          />
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
      rounded-md border-[1px] border-gray  text-center"
            type="number"
            name="room_capacity"
            placeholder="Capacité de la salle"
            required
          />
          <AddButton />
        </form>
      </Modal>
    </div>
  );
}

export default NewRoom;
