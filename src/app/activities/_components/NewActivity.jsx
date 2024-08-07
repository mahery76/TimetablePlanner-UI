"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import {addActivity} from "@/api/activityApi"
import AddButton from '@/components/AddButton'
import OpenOpenAddButton from "@/components/OpenAddButton";
function SelectElement ({dataList, dataId, dataDisplay, dataLabel}){
  return (
         <>
         <label htmlFor={dataId} className="text-darkGray text-sm">{dataLabel}</label>
           <select
              name={dataId}
              id=""
              className="bg-my-white w-full bg-gray-100 my-2 py-1.5
                            rounded-md border-[1px] border-gray  text-center "
            >
              {dataList.map((item, idx) => (
                <option key={idx} value={item[dataId]}>
                  {item[dataDisplay]}
                </option>
              ))}
            </select>
         </>
  )
}

function NewActivity({ courses, teachers, groups, rooms, core_class_refs }) {
  const [isNewActiviy, setIsNewActivity] = useState(false);
  const handleSubmit = (event) => {
    const form = event.target;
    const data = new FormData(form);
    const activityData = {};
    data.forEach((value, key) => (activityData[key] = value));
    addActivity(activityData);
  }
   
  return (
    <div className="flex justify-center items-center">
     

      <OpenOpenAddButton
        title="Ajouter activité"
        handleAdd={() => setIsNewActivity(() => true)}
      />

      <Modal isOpen={isNewActiviy} onClose={() => setIsNewActivity(() => false)}>
        <h2 className="font-bold text-center text-cyan-600 my-4">
          Nouvelle activité
        </h2>

        <form onSubmit={handleSubmit} className="w-72 p-4">
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
                          rounded-md border-[1px] border-gray  text-center"
            type="number"
            name="activity_hours"
            placeholder="Volume horaire"
            required
          />
          <SelectElement  dataList={courses}         dataId="course_id"       dataLabel="Unité d'enseignement" dataDisplay="course_name"/>
          <SelectElement  dataList={teachers}        dataId="teacher_id"      dataLabel="Enseignant" dataDisplay="teacher_name"/>
          <SelectElement  dataList={groups}          dataId="group_id"        dataLabel="Classe" dataDisplay="group_name"/>
          <SelectElement  dataList={rooms}           dataId="room_id"         dataLabel="Salle" dataDisplay="room_name"/>
          <SelectElement  dataList={core_class_refs} dataId="core_class_ref_id"  dataLabel="Réf Tronc Commun" dataDisplay="core_class_ref_name"/>
       <AddButton />
        </form>
      </Modal>

    </div>
  );
}

export default NewActivity;
