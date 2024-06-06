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
      w-1/2 hover:bg-gradient-to-r from-cyan-400 to-green-primary md:max-w-[6rem] 
      rounded-md flex items-center justify-center p-2 whitespace-nowrap
      `}
    >
      {linkTitle}
    </Link>
  );
};

export default function timetableLayout({ children }) {
  return (
    <section className="flex flex-col h-[85vh]" >
      <div className=" flex justify-center md:justify-end m-4 gap-8 md:mx-8">
        <LinkItem linkPath="/timetable/group" linkTitle="Classe" />
        <LinkItem linkPath="/timetable/teacher" linkTitle="Enseignant" />
      </div>
        {children}
    </section>
  );
}
