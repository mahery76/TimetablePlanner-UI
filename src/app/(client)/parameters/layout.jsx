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
      ${isPathMatched(pathname, linkPath) ? "bg-green-primary" : ""} 
      hover:bg-gradient-to-r from-blue-primary to-green-primary
      bg-blue-primary
      rounded-md flex items-center justify-center p-2 whitespace-nowrap
      `}
    >
      {linkTitle}
    </Link>
  );
};

export default function timetableLayout({ children }) {
  return (
    <section>
      {/* parameters header */}
      <div className="flex gap-x-5 p-2 mt-2 overflow-x-auto md:justify-center md:mr-4">
        <LinkItem linkPath="/parameters/teachers" linkTitle="Enseignants" />
        <LinkItem linkPath="/parameters/majors" linkTitle="Filières" />
        <LinkItem linkPath="/parameters/classes" linkTitle="Classes" />
        <LinkItem linkPath="/parameters/courses" linkTitle="Matières" />
        <LinkItem linkPath="/parameters/rooms" linkTitle="Salles" />
        <LinkItem
          linkPath="/parameters/timeslots"
          linkTitle="Créneaux horaires"
        />
        <LinkItem
          linkPath="/parameters/core_classes"
          linkTitle="Troncs communs"
        />
      </div>

    {/* parameters content */}
      <div className="w-full sm:flex justify-center px-4">
        <div className=" sm:max-w-[35em]">{children}</div>
      </div>
    </section>
  );
}
