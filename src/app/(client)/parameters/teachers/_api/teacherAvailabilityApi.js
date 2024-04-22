import { normalizeDate } from "@/_lib/Calendar"
import {db} from "@/_lib/indexedDb"

export const addTeacherAvailability = (availability_date,timeslot_id,teacher_id) => {
    const newTeacherAvailability = {
        availability_date: normalizeDate(availability_date),
        timeslot_id: timeslot_id,
        teacher_id: teacher_id
    }
    db.teacher_availabilities
    .add(newTeacherAvailability)
    .then((newTeacherAvailabilityCreated) => {
        console.log(newTeacherAvailabilityCreated)
    })
    .catch(function (error) {
        console.log(error)
    })
}

export const deleteTeacherAvailability = (teacher_availability_id) => {
    db.teacher_availabilities
    .delete(teacher_availability_id)
    .then(() => {
        console.log('teacher availability deleted')
    })
    .catch((error) => {
        console.error("error deleting", error)
    })
}

export const getAvailability = (teacher_id, availability_date, timeslot_id, setAvailabilityFound, setIsChecked) => {
    return db.teacher_availabilities
        .where({
            teacher_id: teacher_id, 
            availability_date: normalizeDate(availability_date), 
            timeslot_id: timeslot_id
        })
        .first()
        .then(availability => {
            if (availability) {
                console.log('Availability found:', availability);
                setAvailabilityFound(availability);
                setIsChecked(true)
            } else {
                console.log('No availability found');
                setIsChecked(false)
            }
        })
        .catch(error => {
            console.error('Error fetching availability:', error);
            throw error;
        });
}
