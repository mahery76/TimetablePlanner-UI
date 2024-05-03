"use client";
import React, { useEffect, useState } from "react";
import NewActivity from "./_components/NewActivity";
import ActivitiesList from "./_components/ActivitiesList";
import { db } from "@/_lib/indexedDb";
import { getAllActivities } from "./_api/getAllActivities";

function layout({ children }) {
  const [activities, setActivities] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [core_class_refs, setCore_class_refs] = useState([]);
  useEffect(() => {
    getAllActivities(setActivities);
    db.courses.toArray().then(setCourses);
    db.teachers.toArray().then(setTeachers);
    db.groups.toArray().then(setGroups);
    db.rooms.toArray().then(setRooms);
    db.core_class_refs.toArray().then(setCore_class_refs);
  }, []);
  return (
    <div>
      <div className="mt-6">
        <ActivitiesList activities={activities} setActivities={setActivities} />
      </div>
      <div className="mt-8">
        <NewActivity
          courses={courses}
          teachers={teachers}
          groups={groups}
          rooms={rooms}
          core_class_refs={core_class_refs}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
