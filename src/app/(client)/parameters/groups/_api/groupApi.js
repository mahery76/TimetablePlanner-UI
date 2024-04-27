import { db } from "@/_lib/indexedDb";

export const getAllGroups = (setGroups) => {
    const 
    // db.groups.toArray().then(setGroups)
};

export const addGroup = (newGroup, setIsNewGroup, groups, setGroups) => {
    db.groups
    .add(newGroup)
    .then(() => {
        alert("Classe ajouté avec succée")
        setIsNewGroup(() => false)
        setGroups([... groups, newGroup]);
    })
    .catch(error => {
        alert("Echec pour l'ajout de classe")
        console.log(error)
    })
}

export const deleteGroup = (group_id, setGroups, groups) => {
    const confirmed = window.confirm("Voulez-vous supprimer cette classe")
    if(confirmed){
        db.groups
        .delete(group_id)
        .then(() => {
            console.log("Classe supprimée avec succés")
            setGroups(
                groups.filter(group => (group.group_id !== group_id))
            )
        })
        .catch((error) => {
            console.error("error deleting the group: ", error)
        })

    }
}

