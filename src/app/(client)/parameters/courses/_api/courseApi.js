import { db } from "@/_lib/indexedDb";
import { innerJoin } from "@/_lib/query";
export const getAllCourses = async (setCourses) => {
    // let courses = []
    // let majors = []
    // db.courses.toArray().then((data) => {
    //     courses = [...data]
    //     db.majors.toArray().then(data => {
    //         majors = [...data]
    //         const coursesColums = ["course_id", "course_name"]
    //         const majorsColumns = ["major_name", "major_id"];
    //         const combinedCourses = innerJoin(
    //             courses,
    //             majors,
    //             "major_id",
    //             "major_id",
    //             coursesColums,
    //             majorsColumns,
    //         );
    //         setCourses(combinedCourses)
    //     })
    // })
    const courses = await db.courses.toArray();
    const majors = await db.majors.toArray();
    let combinedCourses = []
    courses.forEach(course => {
        let matchedMajors = majors.find(major => {
            return major.major_id === course.major_id
        })
        let combinedCourse = {
            course_id: course.course_id,
            course_name: course.course_name,
            ...matchedMajors,
        }
        combinedCourses.push(combinedCourse)
    });
    setCourses(combinedCourses)
}

export const deleteCourse = (course_id, setCourses, courses) => {
     const confirmed = window.confirm("Voulez-vous supprimer l'unité d'enseignement")
     if(confirmed){
        db.courses
        .delete(course_id)
        .then(() => {
            console.log("Unité d'enseignement supprimé")
            setCourses(courses.filter((course) => course.course_id !== course_id));
        })
        .catch(error => {
            console.error("error deleting the course:", error)
        })
     }
}

export const addCourse = (newCourse) => {
    let newCourseData = {
        course_name: newCourse["course_name"],
        major_id: Number(newCourse["major_id"])
    }
    db.courses
    .add(newCourseData)
    .then(() => {
        console.log("new courses added")
    })
    .catch((error) => {
        console.log("Echec pour l'ajout de nouvelle unité d'enseignement", error)
    })
}