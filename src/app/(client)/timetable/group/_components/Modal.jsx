import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
function Modal({ isOpen, children, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed z-10 top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-my-white p-3 rounded-xl "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex text-darkGray w-full justify-end mb-2">
          <div onClick={onClose} className="cursor-pointer">
            <IoIosCloseCircle />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
