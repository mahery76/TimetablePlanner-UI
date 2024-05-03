import Dexie from "dexie";
import {
  roomsData,
  core_class_refsData,
  coursesData,
  groupsData,
  majorsData,
  teacherAvailabilitiesData,
  teachersData,
  timeslotsData,
} from "./indexedDbDefaultdata";

export const db = new Dexie("coolplannerdb");
db.version(1).stores({
  teachers: "++teacher_id, teacher_name, teacher_title, teacher_profil_pic",
  timeslots: "++timeslot_id, timeslot_value",
  teacher_availabilities:
    "++teacher_availability_id, availability_date, teacher_id, timeslot_id",
  majors: "++major_id, major_name",
  groups: "++group_id, group_size, group_name, major_id",
  courses: "++course_id, course_name, major_id",
  core_class_refs: "++core_class_ref_id, core_class_ref_name",
  rooms: "++room_id, room_name, room_capacity",
  activities:
    "++activity_id, activity_hours, activity_remaining_hours, course_id, teacher_id, group_id, room_id, core_class_ref_id",
});

db.on("populate", () => {
  db.teachers.bulkAdd(teachersData);
  db.timeslots.bulkAdd(timeslotsData);
  db.teacher_availabilities.bulkAdd(teacherAvailabilitiesData);
  db.majors.bulkAdd(majorsData);
  db.groups.bulkAdd(groupsData);
  db.courses.bulkAdd(coursesData);
  db.core_class_refs.bulkAdd(core_class_refsData);
  db.rooms.bulkAdd(roomsData);
});

db.open().catch(function (error) {
  console.error("Open failed: " + error);
});
