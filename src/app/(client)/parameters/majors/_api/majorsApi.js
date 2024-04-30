import {db} from "@/_lib/indexedDb"
export const getAllMajors = (setMajors) => {
    db.majors.toArray().then(setMajors)
}
export const deleteMajor = (major_id, setMajors, majors) => {
    const confirmed = window.confirm("Voulez-vous supprimer ce département")
    if(confirmed){
        db.majors
        .delete(major_id)
        .then(() => {
            setMajors(
                majors.filter((major) => major.major_id !== major_id)
            )
        })
        .catch((error) => {
            console.error("error deleting: ", error)
        })
    }
}
export const addMajor = (newMajor, setIsNewMajor, majors, setMajors) => {
    db.majors
    .add(newMajor)
    .then(() => {
        alert("Département crée avec succés")
        setIsNewMajor(() => false)
        setMajors([...majors, newMajor])
    })
    .catch((error) => {
        alert("Eche d'ajout")
        console.log(error)
    })
}