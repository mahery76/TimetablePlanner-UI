import React from 'react';

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
      className="bg-white p-3 rounded-xl" 
      onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
 );
}

export default Modal;
