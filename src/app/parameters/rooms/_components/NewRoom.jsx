"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { addRoom } from "@/api/roomApi";

function NewRoom({ rooms, setRooms }) {
  const [isNewRoom, setIsNewRoom] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form)
    const roomObject = {}
    data.forEach((value, key) => (roomObject[key] = value));
    addRoom(roomObject, setIsNewRoom, rooms, setRooms )
  };

  return (
    <div>
      <button
        className="flex w-full  items-center justify-center p-0.5  overflow-hidden rounded-lg group 
                    bg-gradient-to-br from-green-primary to-blue-secondary group-hover:from-green-primary group-hover:to-blue-primary "
        onClick={() => setIsNewRoom(() => true)}
      >
        <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Ajouter salle
        </span>
      </button>

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

export default NewRoom;
