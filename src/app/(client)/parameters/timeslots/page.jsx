"use client"
import React, { useState } from "react";
import NewTimeslot from './_components/NewTimeslot'

function Timeslots() {
  const [timeslots, setTimeslots] = useState([])
  return (
    <div>
      <div className="mt-6">
      </div>
      <div className="mt-8">
        <NewTimeslot timeslots={timeslots} setTimeslots={setTimeslots} />
      </div>
    </div>
  );
}

export default Timeslots;
