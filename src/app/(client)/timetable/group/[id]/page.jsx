"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { MdOutlineRefresh } from "react-icons/md";
import { FaMarker } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
function page() {
  const searchParams = useSearchParams();
  const [currentDate, setCurrentDate] = useState(new Date());

  const { id: group_id } = useParams();
  const group_name = searchParams.get("group_name");
  return (
    <div>
      {/* date navigation and buttons */}
      <div className="overflow-auto flex md:justify-center">
        <div className="flex min-w-[50rem] max-w-[50rem] md:items-center md:justify-evenly gap-8 py-6 pr-4  bg-white mx-4 mt-4">
          {/* Generate */}
          <div
            className="h-12 flex items-center justify-center  gap-2 bg-blue-200 rounded-full px-4   cursor-pointer hover:bg-blue-300"
            title="generer"
          >
            <BsStars />
            Génerer
          </div>
          {/* Refresh */}
          <div
            className="h-12 flex items-center justify-center  gap-2 bg-blue-200 rounded-full px-4   cursor-pointer hover:bg-blue-300"
            title="Actualiser"
          >
             <MdOutlineRefresh />
            Actualiser
          </div>
          {/* timetable info */}
          <div>
            {group_id} {group_name}
          </div>
          {/* Mark */}
          <div
            className="h-12 flex items-center justify-center gap-2 bg-green-200 rounded-full px-4  cursor-pointer hover:bg-green-300"
          >
              <FaMarker />
            Marquer
          </div>
          {/* Clear */}
          <div
            className="h-12 flex items-center justify-center gap-2 bg-green-200 rounded-full px-4  cursor-pointer hover:bg-green-300"
          >
              <AiOutlineClear />
            Effacer
          </div>
        </div>
      </div>

      {/* timetable section*/}
      <div className="flex">
        <div>creneaux</div>
        <div>Lun</div>
        <div>Mar</div>
        <div>Mer</div>
        <div>Jeu</div>
        <div>Ven</div>
        <div>Sam</div>
      </div>
      <div>timetable</div>
    </div>
  );
}
export default page;
