import React from "react";

function OpenOpenAddButton({ title, handleAdd }) {
  return (
    <>
      <button
        className="flex w-full  items-center justify-center p-0.5  overflow-hidden rounded-lg border-2 border-blue-500 bg-blue-100 hover:bg-blue-300"
        onClick={() => handleAdd()}
      >
        <span className="w-full relative px-5 py-2.5  rounded-md group-hover:bg-opacity-0">
          {title}
        </span>
      </button>
    </>
  );
}

export default OpenOpenAddButton;
