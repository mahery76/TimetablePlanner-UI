"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Modal from "../_components/Modal";
import {getAllTimeslots} from "@/parameters/timeslots/_api/timeslotsApi"
import {
  toFrDate,
  generateWeekDates,
  setToNextWeek,
  setToPreviousWeek,
} from "@/_lib/Calendar";

function WeekdayCalendar() {
  const { id } = useParams();
  const router = useRouter();
  const [availabilityIsOpen, setAvailabilityIsOpen] = useState(true);

  const closeAvailabilityWindow = () => {
    setAvailabilityIsOpen(() => false);
    router.push("/parameters/teachers");
  };

  const [currentDay, setCurrenDay] = useState(new Date());
  const [weekDates, setWeekDates] = useState([]);
  const [timeslots, setTimeslots] = useState([])
  useEffect (() => {
    setWeekDates(generateWeekDates(currentDay));
    getAllTimeslots(setTimeslots)
  }, [currentDay]);
  return (
    <>
      <Modal isOpen={availabilityIsOpen} onClose={closeAvailabilityWindow}>
        <div className="flex justify-center">
          Disponibilités de l'enseignant : {id}
        </div>
        {/* data navigation  */}
        <div className="flex justify-evenly mt-2">
          <div
            className="text-green-secondary cursor-pointer"
            onClick={() => setCurrenDay(setToPreviousWeek(currentDay))}
          >
            P
          </div>

          <div>
            Semaine du{" "}
            <span className="text-green-secondary">
              {" "}
              {weekDates[1] && toFrDate(weekDates[1])}
            </span>
          </div>

          <div
            className="text-green-secondary cursor-pointer"
            onClick={() => setCurrenDay(setToNextWeek(currentDay))}
          >
            N
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
              <tr>
                <td className="px-1 py-1.5 text-center text-xs ">
                  08:00 - 10:00
                </td>
              </tr>
              <tr>
                <td className="px-1 py-1.5 text-center text-xs ">
                  10:00 - 12:00
                </td>
              </tr>
              <tr>
                <td className="px-1 py-1.5 text-center text-xs ">
                  13:00 - 15:00
                </td>
              </tr>
              <tr>
                <td className="px-1 py-1.5 text-center text-xs ">
                  15:00 - 17:00
                </td>
              </tr>
            </tbody>
          </table>
          {/* availabilities */}
          <table>
            <thead>
              <tr>
                <th className="px-1.5 py-1.5 text-center ">Lun {new Date(weekDates[1]).getDate()}</th>
                <th className="px-1.5 py-1.5 text-center ">Mar {new Date(weekDates[2]).getDate()}</th>
                <th className="px-1.5 py-1.5 text-center ">Mer {new Date(weekDates[3]).getDate()}</th>
                <th className="px-1.5 py-1.5 text-center ">Jeu {new Date(weekDates[4]).getDate()}</th>
                <th className="px-1.5 py-1.5 text-center ">Ven {new Date(weekDates[5]).getDate()}</th>
                <th className="px-1.5 py-1.5 text-center ">Sam {new Date(weekDates[6]).getDate()}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-1.5 py-1.5 text-center">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
              </tr>

              <tr>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
              </tr>

              <tr>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
              </tr>

              <tr>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
                <td className="px-1.5 py-1.5 text-center ">
                  <input className="w-5 h-6" type="checkbox" name="" id="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
}

export default WeekdayCalendar;
