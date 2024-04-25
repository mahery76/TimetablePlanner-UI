import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {addTeacherAvailability, deleteTeacherAvailability, getAvailability} from "@/parameters/teachers/_api/teacherAvailabilityApi"
function InputAvailability({date: availability_date, timeslot: timeslot_id}) {
  const { id: teacher_id } = useParams();
  const [isChecked, setIsChecked] = useState(false)
  const [availabilityFound, setAvailabilityFound] = useState({})

  const handleChange = () => {
    if(isChecked){
      deleteTeacherAvailability(availabilityFound["teacher_availability_id"])
      setIsChecked(false)
    }
    else{
      addTeacherAvailability(availability_date,timeslot_id,teacher_id)
      setIsChecked(true)
    }
  }
  
  useEffect(() => {
      getAvailability(teacher_id, availability_date, timeslot_id, setAvailabilityFound, setIsChecked)
  },[teacher_id, availability_date, timeslot_id])
  return (
    <div>
      <input 
      className="w-5 h-6 text-green-primary focus:ring-green-primary" 
      type="checkbox" 
      onChange={handleChange}
      checked={isChecked}
      />
    </div>
  );
}

export default InputAvailability;
