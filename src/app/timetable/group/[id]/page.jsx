"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { MdOutlineRefresh } from "react-icons/md";
import { FaMarker } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoPlayBackOutline } from "react-icons/io5";
import { IoPlayForwardOutline } from "react-icons/io5";
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
          {/* timetable info and previous and next buttons*/}
          <div className="w-2/3 md:w-1/3 flex justify-evenly">
            <div className="flex items-center " id="previous_button"><div className="p-2 md:p-4 rounded-md bg-blue-200"><IoPlayBackOutline/></div></div>
            <div className="flex flex-col items-center  ">
              <div className="text-sm md-text-md">{group_name}</div>
              <div className="text-xs">{toFrDate(currentDate)}</div>
            </div>
            <div className="flex items-center " id="next_button"><div className="p-2 md:p-4 rounded-md bg-blue-200"><IoPlayForwardOutline/></div></div>
          </div>

          {/* timetable buttons control */}
          <div className="hidden md:flex gap-2 md:w-2/3 md:justify-evenly">
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
          <div className="md:hidden w-1/3 flex justify-center">
            <div
              className="h-12 flex items-center justify-center "
              onClick={() => setIsMenuButtonOpen(() => true)}
            >
              <div className="flex items-center bg-blue-200 rounded-full p-2  cursor-pointer hover:bg-blue-300">
                <BsThreeDotsVertical />
              </div>
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
