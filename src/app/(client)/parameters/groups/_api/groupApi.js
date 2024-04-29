import { db } from "@/_lib/indexedDb";
import { innerJoin } from "@/_lib/query";


// Inside your component

export const getAllGroups = (setGroups) => {
  let groups = [];
  let majors = [];
  db.groups.toArray().then((data) => {
    groups = [...data];
    db.majors.toArray().then((data) => {
      majors = [...data];
      const groupscolumns = ["group_id", "group_name", "group_size"];
      const majorsColumns = ["major_name", "major_id"];
      const combinedGroups = innerJoin(
        groups,
        majors,
        "major_id",
        "major_id",
        groupscolumns,
        majorsColumns
      );
      setGroups(combinedGroups);
    });
  });
};

export const addGroup = (newGroup) => {
  let newGroupData = {
    group_name: newGroup["group_name"],
    group_size: Number(newGroup["group_size"]),
    major_id: Number(newGroup["major_id"]),
  };
  db.groups
    .add(newGroupData)
    .then(() => {
      alert("Classe ajouté avec succés");
      history.push('/parameters/groups'); // Redirect to /parameters/groups


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
