"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { createContext, useContext } from "react";
import { IsSideMenuOpenContext } from "@/context/timetableSideMenuContext";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";

const isPathMatched = (currentPath, pathProps) => {
  return currentPath.startsWith(pathProps);
};

const LinkItem = ({ linkPath, linkTitle }) => {
  const pathname = usePathname();
  return (
    <Link
      href={linkPath}
      className={`
      ${
        isPathMatched(pathname, linkPath)
          ? "bg-green-200 border-2 border-green-500"
          : ""
      } 
       hover:hover:bg-green-200 shadow-md 
      w-[5rem] rounded-md flex items-center justify-center p-2 whitespace-nowrap
      `}
    >
      {linkTitle}
    </Link>
  );
};

export default function timetableLayout({ children }) {
  const { isMenuOpen, setIsMenuOpen } = useContext(IsSideMenuOpenContext);

  return (
    <section className="flex flex-col mt-4 h-[85vh]">
      {/* isMenuClosed */}
      <div
        className={` 
      ${isMenuOpen ? "hidden" : ""}
      absolute w-[15rem] flex items-center justify-between ml-4 my-4 z-10 
      `}
      >
        <div
          className="p-3 cursor-pointer rounded-full bg-neutral-100 hover:bg-neutral-200"
          onClick={() => setIsMenuOpen(() => true)}
        >
          <CiMenuBurger />
        </div>
      </div>

      {/* isMenuOpen */}
      <div
        className={` 
      ${isMenuOpen ? "" : "hidden"}
      absolute w-[15rem] flex items-center justify-between ml-4 my-4 z-10 
      `}
      >
        <div
          className="p-3 cursor-pointer rounded-full bg-neutral-100 hover:bg-neutral-200"
          onClick={() => setIsMenuOpen(() => false)}
        >
          <MdClose />
        </div>
        <LinkItem linkPath="/timetable/group" linkTitle="Classe" />
        <LinkItem linkPath="/timetable/teacher" linkTitle="Enseignant" />
      </div>
      {children}
    </section>
  );
}
