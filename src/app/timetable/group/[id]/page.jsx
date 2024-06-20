"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { MdOutlineRefresh } from "react-icons/md";
import { FaMarker } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import Modal from "@/components/Modal";
import { toFrDate } from "@/lib/Calendar";
function page() {
  const searchParams = useSearchParams();
  const [currentDate, setCurrentDate] = useState(new Date());

  const { id: group_id } = useParams();
  const group_name = searchParams.get("group_name");

  const [isMenuButtonOpen, setIsMenuButtonOpen] = useState(false);
  return (
    <div className="w-full h-5/6 mt-4">
      {/* date navigation and buttons */}
      <div className="flex  md:justify-center ">
        <div className="w-full flex backdrop:gap-4 md:gap-8  bg-white">

          {/* timetable info */}
          <div className="flex flex-col items-center w-1/2 md:w-1/4 ">
            <div className="bold text-lg" >{group_name}</div>
            {toFrDate(currentDate)}
          </div>

          {/* timetable buttons control */}
          <div className="hidden md:flex gap-2 md:w-3/4 md:justify-evenly">
            {/* Generate */}
            <div
              className=" h-12 flex items-center justify-center  gap-2 bg-blue-200 rounded-full px-4 cursor-pointer hover:bg-blue-300"
              title="generer"
            >
              <BsStars />
              <div className="">Génerer</div>
            </div>
            {/* Refresh */}
            <div
              className="h-12 flex items-center justify-center  gap-2 bg-blue-200 rounded-full px-4   cursor-pointer hover:bg-blue-300"
              title="Actualiser"
            >
              <MdOutlineRefresh />
              <div className="">Actualiser</div>
            </div>
            {/* Mark */}
            <div className="h-12 flex items-center justify-center gap-2 bg-blue-200 rounded-full px-4  cursor-pointer hover:bg-blue-300">
              <FaMarker />
              <div className="">Marquer</div>
            </div>
            {/* Clear */}
            <div className="h-12 flex items-center justify-center gap-2 bg-blue-200 rounded-full px-4  cursor-pointer hover:bg-blue-300">
              <AiOutlineClear />
              <div className="">Effacer</div>
            </div>
          </div>

          {/* timetable buttons control mobile breakpoint */}
          <div className="md:hidden w-1/2 flex justify-center">
            <div
              className="h-12 flex items-center justify-center gap-2 bg-blue-200 rounded-full p-4  cursor-pointer hover:bg-blue-300"
              onClick={() => setIsMenuButtonOpen(() => true)}
            >
              <BsThreeDotsVertical />
            </div>

            <Modal
              isOpen={isMenuButtonOpen}
              onClose={() => setIsMenuButtonOpen(() => false)}
            >
              <div className="flex flex-col gap-8 p-[2rem]">
                {/* Generate */}
                <div
                  className=" h-12 flex items-center justify-center  gap-2 bg-blue-200 rounded-full px-4 cursor-pointer hover:bg-blue-300"
                  title="generer"
                >
                  <BsStars />
                  <div className="">Génerer</div>
                </div>
                {/* Refresh */}
                <div
                  className="h-12 flex items-center justify-center  gap-2 bg-blue-200 rounded-full px-4   cursor-pointer hover:bg-blue-300"
                  title="Actualiser"
                >
                  <MdOutlineRefresh />
                  <div className="">Actualiser</div>
                </div>
                {/* Mark */}
                <div className="h-12 flex items-center justify-center gap-2 bg-blue-200 rounded-full px-4  cursor-pointer hover:bg-blue-300">
                  <FaMarker />
                  <div className="">Marquer</div>
                </div>
                {/* Clear */}
                <div className="h-12 flex items-center justify-center gap-2 bg-blue-200 rounded-full px-4  cursor-pointer hover:bg-blue-300">
                  <AiOutlineClear />
                  <div className="">Effacer</div>
                </div>
              </div>
            </Modal>
          </div>

        </div>
      </div>

      {/* timetable section*/}
      <div className="flex m-4">
        <div>creneaux</div>
        <div>Lun</div>
        <div>Mar</div>
        <div>Mer</div>
        <div>Jeu</div>
        <div>Ven</div>
        <div>Sam</div>
      </div>
    </div>
  );
}
export default page;
