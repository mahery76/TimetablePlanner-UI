"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { getAllTimeslots } from "@/api/timeslotsApi";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import InputAvailability from "@/parameters/teachers/_components/InputAvailability";
import {
  toFrDate,
  generateWeekDates,
  setToNextWeek,
  setToPreviousWeek,
} from "@/_lib/Calendar";

function WeekdayCalendar() {
  // to get the name of the teacher
  const searchParams = useSearchParams();
  const teacher_name = searchParams.get("teacher_name");
  // close the model component
  const router = useRouter();
  const [availabilityIsOpen, setAvailabilityIsOpen] = useState(true);
  const closeAvailabilityWindow = () => {
    setAvailabilityIsOpen(() => false);
    router.push("/parameters/teachers");
  };
  // for the input component
  const [currentDay, setCurrenDay] = useState(new Date());
  const [weekDates, setWeekDates] = useState([]);
  const [timeslots, setTimeslots] = useState([]);
  useEffect(() => {
    setWeekDates(generateWeekDates(currentDay));
    getAllTimeslots(setTimeslots);
    console.log(searchParams);
  }, [currentDay]);
  return (
    <>
      <Modal isOpen={availabilityIsOpen} onClose={closeAvailabilityWindow}>
        <div className="flex w-full justify-center items-center text-center">
          {teacher_name && <p className="max-w-[20em]"><span className="font-bold">Disponibilités de :</span> {teacher_name}</p>}
        </div>
        {/* date navigation  */}
        <div className="flex justify-between mt-2">
          <div
            className="text-green-secondary cursor-pointer flex items-center hover:scale-110 p-1.5"
            onClick={() => setCurrenDay(setToPreviousWeek(currentDay))}
          >
            <FaRegArrowAltCircleLeft />
          </div>

          <div className="flex items-center gap-3">
            Semaine du{" "}
            <span className="text-green-secondary">
              {" "}
              {weekDates[1] && toFrDate(weekDates[1])}
            </span>
          </div>

          <div
            className="text-green-secondary cursor-pointer flex items-center hover:scale-110 p-1.5"
            onClick={() => setCurrenDay(setToNextWeek(currentDay))}
          >
            <FaRegArrowAltCircleRight />
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {/* timeslots */}
          <table>
            <thead>
              <tr>
                <th className="px-1.5 py-1.5 text-center ">Creneaux</th>
              </tr>
            </thead>
            <tbody>
              {timeslots.map((timeslot) => (
                <tr key={timeslot.timeslot_id}>
                  <td className="px-1 py-1.5 text-center text-xs ">
                    {timeslot.timeslot_value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* availabilities */}
          <table>
            <thead>
              <tr>
                <th className="px-1.5 py-1.5 text-center ">Lun</th>
                <th className="px-1.5 py-1.5 text-center ">Mar</th>
                <th className="px-1.5 py-1.5 text-center ">Mer</th>
                <th className="px-1.5 py-1.5 text-center ">Jeu</th>
                <th className="px-1.5 py-1.5 text-center ">Ven</th>
                <th className="px-1.5 py-1.5 text-center ">Sam</th>
              </tr>
            </thead>
            <tbody>
              {timeslots.map((timeslot) => (
                <tr key={timeslot.timeslot_id}>
                  <td className="px-1.5 py-1.5 text-center">
                    <InputAvailability
                      date={new Date(weekDates[1])}
                      timeslot={timeslot.timeslot_id}
                    />
                  </td>
                  <td className="px-1.5 py-1.5 text-center ">
                    <InputAvailability
                      date={new Date(weekDates[2])}
                      timeslot={timeslot.timeslot_id}
                    />
                  </td>
                  <td className="px-1.5 py-1.5 text-center ">
                    <InputAvailability
                      date={new Date(weekDates[3])}
                      timeslot={timeslot.timeslot_id}
                    />
                  </td>
                  <td className="px-1.5 py-1.5 text-center ">
                    <InputAvailability
                      date={new Date(weekDates[4])}
                      timeslot={timeslot.timeslot_id}
                    />
                  </td>
                  <td className="px-1.5 py-1.5 text-center ">
                    <InputAvailability
                      date={new Date(weekDates[5])}
                      timeslot={timeslot.timeslot_id}
                    />
                  </td>
                  <td className="px-1.5 py-1.5 text-center ">
                    <InputAvailability
                      date={new Date(weekDates[6])}
                      timeslot={timeslot.timeslot_id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
}

export default WeekdayCalendar;
