import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
function Modal({ isOpen, children, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed z-40 top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-blue-body p-3 rounded-xl "
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
