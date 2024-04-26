import { db } from "@/_lib/indexedDb";
export const getAllTimeslots = (setTimeslots) => {
    db.timeslots.toArray().then(setTimeslots);
  };

export const addTimeslot = (newTimeslot, setIsNewTimeslot, timeslots, setTimeslots) => {
  db.timeslots
  .add(newTimeslot)
  .then(() => {
    alert("Créneau ajouté avec succés")
    setIsNewTimeslot(() => false)
    setTimeslots([...timeslots, newTimeslot])
  })
  .catch(function (error) {
    alert("Echec d'ajout de créneau")
    console.log(error)
  })
}

export const deleteTimeslot = (timeslot_id, setTimeslots, timeslots) => {
  const confirmed = window.confirm("Voulez-vous supprimer ce créneau")
  if(confirmed) {
    db.timeslots
    .delete(timeslot_id)
    .then(() => {
      console.log("Créneaux supprimé avec succés")
      setTimeslots(timeslots.filter(timeslot => timeslot.timeslot_id !== timeslot_id))
    })
    .catch((error) =>{
      console.error("error deleting timeslot: ", error)
    })
  }
}

