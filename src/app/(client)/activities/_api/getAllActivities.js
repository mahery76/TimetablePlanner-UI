import { db } from "@/_lib/indexedDb";
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
        return groups.group_id === activity.group_id
    })
    let matchedRooms = rooms.find((room) => {
        return room.room_id === activity.room_id
    })
    let matchedCoreClassRefs = coreClassRefs.find((coreClass) => {
        return coreClass.core_class_ref_id === activity.core_class_ref_id
    })
    let activityResult = {
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
