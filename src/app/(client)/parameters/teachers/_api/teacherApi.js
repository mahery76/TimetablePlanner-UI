import { db } from "@/_lib/indexedDb";

export const getAllteacher = (setTeachers) => {
  db.teachers.toArray().then(setTeachers);
};

export const addTeacher = (newTeacher, setIsNewTeacher, teachers, setTeachers) => {
  db.teachers
  .add(newTeacher)
  .then(() => {
    alert("Enseignant ajouté avec succés");
    setIsNewTeacher(() => false);
    setTeachers([...teachers, newTeacher])
  })
  .catch(function (error) {
    alert("Echec d'ajout d'Enseignant");
    console.log(error);
  });
};

export const deleteTeacher = (teacher_id, setTeachers, teachers) => {
  const confirmed = window.confirm("Voulez-vous supprimer l'enseignant")
  if (confirmed){
    db.teachers
      .delete(teacher_id)
      .then(() => {
        console.log(`Enseignant supprimé avec succés`);
        setTeachers(teachers.filter(teacher => teacher.teacher_id !== teacher_id))
      })
      .catch((error) => {
        console.error("Error deleting teacher:", error);
      });
  }
};
