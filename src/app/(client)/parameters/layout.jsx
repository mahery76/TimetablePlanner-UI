"use client"
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
      ${isPathMatched(pathname, linkPath)? "text-green-secondary border-b-2 border-green-secondary": ""} 
      hover:text-green-secondary hover:border-b-2 border-green-secondary flex items-center justify-center p-2 whitespace-nowrap
      `}
    >
      {linkTitle}
    </Link>
  );
};

export default function timetableLayout({ children }) {
  return (
    <section>
      <div className="flex gap-x-5 p-2 overflow-x-auto md:justify-end">
        <LinkItem
          linkPath="/parameters/teachers"
          linkTitle="Enseignants"
        />
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

      <div className="px-4 ">{children}</div>
    </section>
  );
}
