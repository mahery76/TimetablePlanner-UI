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
      ${isPathMatched(pathname, linkPath) ? "bg-green-200" : ""} 
      hover:hover:bg-green-200 shadow-md
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
        <LinkItem linkPath="/parameters/majors" linkTitle="Département" />
        <LinkItem linkPath="/parameters/groups" linkTitle="Classes" />
        <LinkItem linkPath="/parameters/courses" linkTitle="Matières" />
        <LinkItem linkPath="/parameters/rooms" linkTitle="Salles" />
        <LinkItem
          linkPath="/parameters/timeslots"
          linkTitle="Créneaux horaires"
        />
        <LinkItem
          linkPath="/parameters/core_class_refs"
          linkTitle="Troncs communs"
        />
      </div>

    {/* parameters content */}
      <div className="w-full sm:flex justify-center px-8">
        <div className="">{children}</div>
      </div>
    </section>
  );
}
