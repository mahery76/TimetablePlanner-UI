import React from "react";

function Occupation({ timeslot_id, date, group_id }) {
  return (
    <td className=" border border-neutral-400  z-0">
      <div className="occupation p-2 flex flex-col justify-evenly bg-white text-center h-[9rem] w-[8rem] hover:bg-blue-200 cursor-pointer">
        <div
          className="text-xs truncate font-bold italic"
          title="Traitement Automatique de langage naturel  Traitement Automatique"
        >
          Traitement Automatique de langage naturel
        </div>
        <div className="text-xs">
          Mr RAFANOMEZANA Lovanirainy Theogene Eddy Celestin
        </div>
      </div>
    </td>
  );
}

export default Occupation;
