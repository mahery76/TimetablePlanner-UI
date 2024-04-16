"use client";
import { useParams } from "next/navigation";
import React from "react";

function WeekdayCalendar() {
  const { id } = useParams();
  return (
    <div>
      Teacher number : {id}
      <div className="flex justify-center gap-4">
        {/* timeslots */}
        <table>
          <thead>
            <tr>
              <th className="px-2 py-2">Creneaux</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-2">08:00 - 10:00</td>
            </tr>
            <tr>
              <td className="px-2 py-2">10:00 - 12:00</td>
            </tr>
            <tr>
              <td className="px-2 py-2">13:00 - 15:00</td>
            </tr>
            <tr>
              <td className="px-2 py-2">15:00 - 17:00</td>
            </tr>
          </tbody>
        </table>

        {/* availabilities */}
        <table>
          <thead>
            <tr>
              <th className="px-2 py-2">Lun</th>
              <th className="px-2 py-2">Mar</th>
              <th className="px-2 py-2">Mer</th>
              <th className="px-2 py-2">Jeu</th>
              <th className="px-2 py-2">Ven</th>
              <th className="px-2 py-2">Sam</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
              <td className="px-2 py-2">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeekdayCalendar;
