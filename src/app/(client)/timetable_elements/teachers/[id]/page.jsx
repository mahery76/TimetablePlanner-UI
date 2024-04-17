"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Modal from "../_components/Modal";

function WeekdayCalendar() {
  const { id } = useParams();
  const router = useRouter()
  const [availabilityIsOpen, setAvailabilityIsOpen] = useState(true)
  const closeAvailabilityWindow = () => {
    setAvailabilityIsOpen(() => false)
    router.push('/timetable_elements/teachers');
  }
  return (
    <>
      <Modal isOpen={availabilityIsOpen} onClose={closeAvailabilityWindow}>
        <div className="flex justify-center">Disponibilités de l'enseignant : {id}</div>
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
                <td className="px-1 py-1.5 text-center text-xs ">08:00 - 10:00</td>
              </tr>
              <tr>
                <td className="px-1 py-1.5 text-center text-xs ">10:00 - 12:00</td>
              </tr>
              <tr>
                <td className="px-1 py-1.5 text-center text-xs ">13:00 - 15:00</td>
              </tr>
              <tr>
                <td className="px-1 py-1.5 text-center text-xs ">15:00 - 17:00</td>
              </tr>
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
