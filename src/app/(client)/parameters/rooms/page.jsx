"use client";
import React, { useEffect, useState } from "react";
import {getAllRooms} from "./_api/roomApi"
import RoomsList from "@/parameters/rooms/_components/RoomsList"
import NewRoom from "@/parameters/rooms/_components/NewRoom"
function Rooms() {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    getAllRooms(setRooms)
  },[])
  useEffect(() =>{
    console.log(rooms)
  },[rooms])
  return (
    <div>
      <div className="mt-6">
        <RoomsList rooms={rooms} setRooms={setRooms}/>
      </div>
      <div className="mt-8">
        <NewRoom rooms={rooms} setRooms={setRooms}/>
      </div>
    </div>
  )
}

export default Rooms