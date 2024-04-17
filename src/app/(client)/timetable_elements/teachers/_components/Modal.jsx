import React from 'react';

function Modal({ isOpen, children, onClose }) {
 if (!isOpen) {
    return null;
 }

 return (
    <div 
    className="modal-overlay fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center" 
    onClick={onClose}
    >
      <div 
      className="modal-content bg-white p-5 w-3/4 rounded-xl" 
      onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
 );
}

export default Modal;
