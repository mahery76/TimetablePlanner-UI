import { db } from "@/_lib/indexedDb";
export const getAllcore_class_refs = (setCore_class_refs) => {
    db.core_class_refs.toArray().then(setCore_class_refs);
  };

export const addCore_class_ref = (new_core_class_ref, setIsNew_Core_class_ref, core_class_refs, setCore_class_refs) => {
  db.core_class_refs
  .add(new_core_class_ref)
  .then(() => {
    alert("Nouveau référence ajouté avec succés")
    setIsNew_Core_class_ref(() => false)
    setCore_class_refs([...core_class_refs, new_core_class_ref])
  })
  .catch(function (error) {
    alert("Echec d'ajout de nouveau référence")
    console.log(error)
  })
}

export const deleteCore_class_ref = (core_class_ref_id, setCore_class_refs, core_class_refs) => {
  const confirmed = window.confirm("Voulez-vous supprimer ce référence")
  if(confirmed) {
    db.core_class_refs
    .delete(core_class_ref_id)
    .then(() => {
      console.log("Référence supprimé avec succés")
      setCore_class_refs(core_class_refs.filter(core_class_ref => core_class_ref.core_class_ref_id !== core_class_ref_id))
    })
    .catch((error) =>{
      console.error("error deleting reference: ", error)
    })
  }
}

