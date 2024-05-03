import { db } from "@/_lib/indexedDb";
export const addActivity = (newActivityForm) => {
  let newActivity = {
    activity_hours: Number(newActivityForm["activity_hours"]),
    activity_remaining_hours: Number(newActivityForm["activity_hours"]),
    course_id: Number(newActivityForm["course_id"]),
    teacher_id: Number(newActivityForm["teacher_id"]),
    group_id: Number(newActivityForm["group_id"]),
    room_id: Number(newActivityForm["room_id"]),
    core_class_ref_id: Number(newActivityForm["core_class_ref_id"]),
  };
  db.activities
  .add(newActivity)
  .then(() => {
    console.log("new activity added")
  })
  .catch(error => {
    console.log("Echec pour l'ajout de nouvelle activité", error)
  }) 
};
