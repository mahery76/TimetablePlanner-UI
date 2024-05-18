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
      rounded-full px-4 flex items-center justify-center p-2 whitespace-nowrap
      `}
    >
      {linkTitle}
    </Link>
  );
};

export default function timetableLayout({ children }) {
  return (
    <section className="flex" >
      <div className="h-[80vh] flex flex-col justify-center ml-4 gap-4">
        <LinkItem linkPath="/timetable/group" linkTitle="C" />
        <LinkItem linkPath="/timetable/teacher" linkTitle="E" />
      </div>
        {children}
    </section>
  );
}
