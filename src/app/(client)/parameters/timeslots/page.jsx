"use client";
import React, { useEffect, useState } from "react";
import NewTimeslot from "./_components/NewTimeslot";
import TimeslotsList from "./_components/TimeslotsList";
import { getAllTimeslots } from "./_api/timeslotsApi";

function Timeslots() {
  const [timeslots, setTimeslots] = useState([]);
  useEffect(() => {
    getAllTimeslots(setTimeslots);
  }, []);
  return (
    <div>
      <div className="mt-6">
        <TimeslotsList timeslots={timeslots} setTimeslots={setTimeslots} />
      </div>
      <div className="mt-8">
        <NewTimeslot timeslots={timeslots} setTimeslots={setTimeslots} />
      </div>
    </div>
  );
}

export default Timeslots;
