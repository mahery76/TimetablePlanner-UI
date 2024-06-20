import React from "react";

function AddButton() {
  return (
    <input
      type="submit"
      className=" 
      border-2 border-blue-500 bg-blue-100 hover:bg-blue-300
      py-1.5 rounded-lg cursor-pointer flex w-full justify-center
"
      value="Ajouter"
    />
  );
}

export default AddButton;
