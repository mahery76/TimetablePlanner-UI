import { db } from "@/lib/indexedDb";

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

export const getAllActivities = async (setActivities) => {
  const activities = await db.activities.toArray();
  const courses = await db.courses.toArray();
  const teachers = await db.teachers.toArray();
  const groups = await db.groups.toArray();
  const rooms = await db.rooms.toArray();
  const coreClassRefs = await db.core_class_refs.toArray();

  let activitiesResults = [];
  activities.forEach((activity) => {
    let matchedCourse = courses.find((course) => {
      return course.course_id === activity.course_id;
    });
    let matchedTeachers = teachers.find((teacher) => {
      return teacher.teacher_id === activity.teacher_id;
    });
    let matchedGroups = groups.find((group) => {
        return group.group_id === activity.group_id
    })
    let matchedRooms = rooms.find((room) => {
        return room.room_id === activity.room_id
    })
    let matchedCoreClassRefs = coreClassRefs.find((coreClass) => {
        return coreClass.core_class_ref_id === activity.core_class_ref_id
    })
    let activityResult = {
      activity_id: activity.activity_id,
      activity_hours:   activity.activity_hours,
      activity_remaining_hours: activity.activity_remaining_hours,
      ...matchedCourse,
      ...matchedTeachers,
      ...matchedGroups,
      ...matchedRooms,
      ...matchedCoreClassRefs,
    };
    activitiesResults.push(activityResult)
  });
  setActivities(activitiesResults)
};

export const deleteActivity = (activity_id, activities, setActivities) => {
    const confirmed = window.confirm("Voulez-vous supprimer cette activité")
    if(confirmed){
        db.activities
        .delete(activity_id)
        .then(() => {
            console.log("activity deleted successfully")
            setActivities(activities.filter(activity => (activity.activity_id !== activity_id)))
        })
        .catch((error) => {
            console.error("Error deleting activity:", error)
        })
    }

}

