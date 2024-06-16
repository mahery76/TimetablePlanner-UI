import { db } from "@/lib/indexedDb";

export const getAllRooms = (setRooms) => {
  db.rooms.toArray().then(setRooms);
};

export const deleteRoom = (room_id, setRooms, rooms) => {
    const confirmed = window.confirm("Voulez-vous supprimer cette salle")
    if(confirmed){
        db.rooms
        .delete(room_id)
        .then(() => {
            console.log("Salle deleted")
            setRooms(
                rooms.filter((room) => room.room_id !== room_id)
            )
        })
        .catch((error) => {
            console.error("error deleting room", error)
        })
    }
}
export const addRoom = (roomObject, setIsNewRoom, rooms, setRooms ) => {
    let newroomObject = {
        room_name: roomObject["room_name"],
        room_capacity: Number(roomObject["room_capacity"])
    }
   db.rooms
   .add(newroomObject)
   .then(() => {
    alert("Salle ajoutée avec succés")
    setIsNewRoom(() => false)
    setRooms([...rooms, roomObject])
   })
   .catch((error) => {
    alert("Echec d'ajout de salle")
    console.log(error)
   })
}