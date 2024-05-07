import { db } from "@/_lib/indexedDb";

export const getGroupsDb = async () => {
  const groups = await db.groups.toArray()
  console.log(groups)
  return groups
}

//rename to getGroupsWithMajors
export const getAllGroups = async (setGroups) => {
  const groups = await db.groups.toArray();
  const majors = await db.majors.toArray();
  let combinedGroups = []
   groups.forEach(group => {
      let matchedMajors = majors.find(major => {
          return major.major_id === group.major_id
      })
      let combinedGroup = {
          group_id: group.group_id,
          group_size: group.group_size,
          group_name: group.group_name,
          ...matchedMajors,
      }
      combinedGroups.push(combinedGroup)
  });
  setGroups(combinedGroups)
};

export const addGroup = (newGroup, router) => {
  let newGroupData = {
    group_name: newGroup["group_name"],
    group_size: Number(newGroup["group_size"]),
    major_id: Number(newGroup["major_id"]),
  };
  db.groups
    .add(newGroupData)
    .then(() => {
      console.log("new group added")
      // this doesn't work because the default submit event is not prevented
      // router.push("/parameters/groups");
    })
    .catch((error) => {
      alert("Echec pour l'ajout de classe");
      console.log(error);
    });
};

export const deleteGroup = (group_id, setGroups, groups) => {
  const confirmed = window.confirm("Voulez-vous supprimer cette classe");
  if (confirmed) {
    db.groups
      .delete(group_id)
      .then(() => {
        console.log("Classe supprimée avec succés");
        setGroups(groups.filter((group) => group.group_id !== group_id));
      })
      .catch((error) => {
        console.error("error deleting the group: ", error);
      });
  }
};

