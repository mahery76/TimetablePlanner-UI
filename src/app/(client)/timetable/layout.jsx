"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          ? "bg-gradient-to-r from-cyan-400 to-green-primary"
          : ""
      } 
      hover:bg-gradient-to-r from-cyan-400 to-green-primary
      rounded-md flex items-center justify-center p-2 whitespace-nowrap
      `}
    >
      {linkTitle}
    </Link>
  );
};

export default function timetableLayout({ children }) {
  return (
    <section className="" >
      <div className="flex justify-end gap-x-5 p-2 my-2 mx-4 bg-my-white">
        <LinkItem linkPath="/timetable/group" linkTitle="Classe" />
        <LinkItem linkPath="/timetable/teacher" linkTitle="Enseignant" />
      </div>
        {children}
    </section>
  );
}
