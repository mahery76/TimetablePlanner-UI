"use client";
import React, { useEffect, useState } from "react";
import NewActivity from "./_components/NewActivity";
import ActivitiesList from "./_components/ActivitiesList";
import { getAllActivities } from "@/api/activityApi";
import { getAllCoursesDb } from "@/api/courseApi";
import { getAllcore_class_refs } from "@/api/core_class_refsApi";
import { getGroupsDb } from "@/api/groupApi";
import { getAllteacher } from "@/api/teacherApi";
import { getAllRooms } from "@/api/roomApi";

function layout({ children }) {
  const [activities, setActivities] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [core_class_refs, setCore_class_refs] = useState([]);
  useEffect(() => {
    getAllActivities(setActivities);
    getAllCoursesDb().then(data => setCourses(data));
    getGroupsDb().then(data => setGroups(data));
    getAllteacher(setTeachers);
    getAllRooms(setRooms);
    getAllcore_class_refs(setCore_class_refs);
  }, []);
  return (
    <div className="w-full sm:flex justify-center px-8">
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
    </div>
  );
}

export default layout;
