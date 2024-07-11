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
import { generateWeekDates, toFrDate } from "@/lib/Calendar";
import { getAllTimeslots } from "@/api/timeslotsApi";
import Occupation from "@/app/timetable/group/[id]/occupation";
const ControlButtons = ({name, action, icon}) => {
  return (
    <div
      className=" h-12 flex items-center justify-center  gap-2 bg-blue-200 rounded-full px-4 cursor-pointer hover:bg-blue-300"
      title={name}
      onClick={() => action}
    >
      {icon}
      <div className="">{name}</div>
    </div>
  );
};
const ControlButtonsMobile = ({name, action, icon}) => {
  return (
    <div
      className=" h-12 flex items-center justify-center  gap-2 bg-blue-200 rounded-full px-4 cursor-pointer hover:bg-blue-300"
      title={name}
      onClick={() => action}
    >
      {icon}
      <div className="">{name}</div>
    </div>
  );
};
function page() {
  const searchParams = useSearchParams();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState([]);
  const [timeslots, setTimeslots] = useState([]);
  useEffect(() => {
    setWeekDates(generateWeekDates(currentDate));
    getAllTimeslots(setTimeslots);
  }, [currentDate]);

  const { id: group_id } = useParams();
  const group_name = searchParams.get("group_name");

  const [isMenuButtonOpen, setIsMenuButtonOpen] = useState(false);

  // useEffect(() => {
  //   console.log(timeslots[0]['timeslot_value']);
  // }, [timeslots]);

  return (
    timeslots.length > 0 && (
      <div className="w-full h-[90vh]">
        {/* date navigation and buttons */}
        <div className="h-[10vh] flex  md:justify-center ">
          <div className="w-full max-w-[886px] flex gap-4 md:gap-8">
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
            <ControlButtons name="Génerer"    action={() => {console.log("alefa")}} icon={<BsStars />}/>
            <ControlButtons name="Actualiser" action={() => {console.log("alefa")}} icon={<MdOutlineRefresh />}/>
            <ControlButtons name="Marquer"    action={() => {console.log("alefa")}} icon={<FaMarker />}/>
            <ControlButtons name="Effacer"    action={() => {console.log("alefa")}} icon={<AiOutlineClear />}/>
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
                  <ControlButtonsMobile name="Génerer"    action={() => {console.log("alefa")}} icon={<BsStars />}/>
                  <ControlButtonsMobile name="Actualiser" action={() => {console.log("alefa")}} icon={<MdOutlineRefresh />}/>
                  <ControlButtonsMobile name="Marquer"    action={() => {console.log("alefa")}} icon={<FaMarker />}/>
                  <ControlButtonsMobile name="Effacer"    action={() => {console.log("alefa")}} icon={<AiOutlineClear />}/>
                </div>
              </Modal>
            </div>
          </div>
        </div>

        {/* timetable section*/}
        <div className="h-[80vh] w-full flex justify-center">
          <div className="overflow-auto">
            <table className="border-collapse border border-neutral-400">
              <thead>
                <tr>
                  <th className="border border-neutral-400 z-20 top-0 left-0 sticky">
                    <div className="bg-white p-1 w-[6rem]">Creneaux</div>
                  </th>

                  <th className="border border-neutral-400 z-10 top-0 sticky">
                    <div className="bg-white p-1 w-[8rem]">
                      Lun {weekDates[1].getDate()}
                    </div>
                  </th>
                  <th className="border border-neutral-400 z-10 top-0 sticky">
                    <div className="bg-white p-1 w-[8rem]">
                      Mar {weekDates[2].getDate()}
                    </div>
                  </th>
                  <th className="border border-neutral-400 z-10 top-0 sticky">
                    <div className="bg-white p-1 w-[8rem]">
                      Mer {weekDates[3].getDate()}
                    </div>
                  </th>
                  <th className="border border-neutral-400 z-10 top-0 sticky">
                    <div className="bg-white p-1 w-[8rem]">
                      Jeu {weekDates[4].getDate()}
                    </div>
                  </th>
                  <th className="border border-neutral-400 z-10 top-0 sticky">
                    <div className="bg-white p-1 w-[8rem]">
                      Ven {weekDates[5].getDate()}
                    </div>
                  </th>
                  <th className="border border-neutral-400 z-10 top-0 sticky">
                    <div className="bg-white p-1 w-[8rem]">
                      Sam {weekDates[6].getDate()}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* one timeslot */}
                {timeslots.map((timeslot) => (
                  <tr className="  z-0" key={timeslot["timeslot_id"]}>
                    <td className="border border-neutral-400 z-10 left-0 sticky">
                      <div className="slot flex justify-center items-center text-center bg-white h-[9rem] w-[6rem]">
                        {timeslot["timeslot_value"]}
                      </div>
                    </td>
                    <Occupation
                      timeslot_id={timeslot["timeslot_id"]}
                      date={new Date(weekDates[1])}
                      group_id={group_id}
                    />
                    <Occupation
                      timeslot_id={timeslot["timeslot_id"]}
                      date={new Date(weekDates[2])}
                      group_id={group_id}
                    />
                    <Occupation
                      timeslot_id={timeslot["timeslot_id"]}
                      date={new Date(weekDates[3])}
                      group_id={group_id}
                    />
                    <Occupation
                      timeslot_id={timeslot["timeslot_id"]}
                      date={new Date(weekDates[4])}
                      group_id={group_id}
                    />
                    <Occupation
                      timeslot_id={timeslot["timeslot_id"]}
                      date={new Date(weekDates[5])}
                      group_id={group_id}
                    />
                    <Occupation
                      timeslot_id={timeslot["timeslot_id"]}
                      date={new Date(weekDates[6])}
                      group_id={group_id}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  );
}
export default page;
