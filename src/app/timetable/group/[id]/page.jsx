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
    <div className="w-full h-[90vh]">
      {/* date navigation and buttons */}
      <div className="h-[10vh] flex  md:justify-center ">
        <div className="w-full flex backdrop:gap-4 md:gap-8">
          {/* timetable info and previous and next buttons*/}
          <div className="w-2/3 md:w-1/3 flex justify-evenly">
            <div className="flex items-center " id="previous_button">
              <div className="p-2 md:p-4 rounded-md bg-blue-200">
                <IoPlayBackOutline />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="text-sm md-text-md">{group_name}</div>
              <div className="text-xs">{toFrDate(currentDate)}</div>
            </div>
            <div className="flex items-center " id="next_button">
              <div className="p-2 md:p-4 rounded-md bg-blue-200">
                <IoPlayForwardOutline />
              </div>
            </div>
          </div>

          {/* timetable buttons control */}
          <div className="hidden md:flex gap-2 md:w-2/3 md:justify-evenly md:items-center">
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
              className="flex items-center justify-center "
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
      <div className="h-[80vh] w-full flex justify-center">
        <div className="overflow-auto">
          <table>
            <thead>
              <tr>
                <th className="z-20 top-0 left-0 sticky">
                  <div className="bg-white p-1 w-[6rem]">Creneaux</div>
                </th>
                <th className="z-10 top-0 sticky">
                  <div className="bg-white p-1 w-[8rem]">Lun 10</div>
                </th>
                <th className="z-10 top-0 sticky">
                  <div className="bg-white p-1 w-[8rem]">Mar 10</div>
                </th>
                <th className="z-10 top-0 sticky">
                  <div className="bg-white p-1 w-[8rem]">Mer 10</div>
                </th>
                <th className="z-10 top-0 sticky">
                  <div className="bg-white p-1 w-[8rem]">Jeu 10</div>
                </th>
                <th className="z-10 top-0 sticky">
                  <div className="bg-white p-1 w-[8rem]">Ven 10</div>
                </th>
                <th className="z-10 top-0 sticky">
                  <div className="bg-white p-1 w-[8rem]">Sam 10</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="z-0">
                <td className="z-10 left-0 sticky">
                  <div className="slot flex justify-center items-center text-center bg-white h-[9rem] w-[6rem]">
                    08:00-10:00
                  </div>
                </td>
                <td className="z-0">
                  <div className="occupation p-2 flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem] hover:bg-blue-200 cursor-pointer">
                    <div
                      className="text-xs truncate font-bold italic"
                      title="Traitement Automatique de langage naturel  Traitement Automatique"
                    >
                      Automatisme Electronique
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="z-0">
                <td className="z-10 left-0 sticky">
                  <div className="slot flex justify-center items-center text-center bg-white h-[9rem] w-[6rem]">
                    08:00-10:00
                  </div>
                </td>
                <td className="z-0">
                  <div className="occupation p-2 flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem] hover:bg-blue-200 cursor-pointer">
                    <div
                      className="text-xs truncate font-bold italic"
                      title="Traitement Automatique de langage naturel  Traitement Automatique"
                    >
                      Automatisme Electronique
                      {/* Traitement Automatique de langage naturel  Traitement Automatique */}
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="z-0">
                <td className="z-10 left-0 sticky">
                  <div className="slot flex justify-center items-center text-center bg-white h-[9rem] w-[6rem]">
                    08:00-10:00
                  </div>
                </td>
                <td className="z-0">
                  <div className="occupation p-2 flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem] hover:bg-blue-200 cursor-pointer">
                    <div
                      className="text-xs truncate font-bold italic"
                      title="Traitement Automatique de langage naturel  Traitement Automatique"
                    >
                      Automatisme Electronique
                      {/* Traitement Automatique de langage naturel  Traitement Automatique */}
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="z-0">
                <td className="z-10 left-0 sticky">
                  <div className="slot flex justify-center items-center text-center bg-white h-[9rem] w-[6rem]">
                    08:00-10:00
                  </div>
                </td>
                <td className="z-0">
                  <div className="occupation p-2 flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem] hover:bg-blue-200 cursor-pointer">
                    <div
                      className="text-xs truncate font-bold italic"
                      title="Traitement Automatique de langage naturel  Traitement Automatique"
                    >
                      Automatisme Electronique
                      {/* Traitement Automatique de langage naturel  Traitement Automatique */}
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
                <td>
                  <div className="occupation flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem]">
                    <div className="text-xs">
                      Traitement Automatique de langage naturel
                    </div>
                    <div className="text-xs">
                      RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default page;
