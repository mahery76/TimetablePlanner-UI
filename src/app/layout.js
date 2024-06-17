"use client";
import "./globals.css";
import Link from "next/link";
import { CiSettings, CiBoxList, CiCalendar } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { MenuProvider } from "@/context/timetableSideMenuContext";
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const isPathMatched = (currentPath, pathProps) => {
  return currentPath.startsWith(pathProps);
};

const Menu = ({ title, icon, path }) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`${
        isPathMatched(pathname, path)
          ? "bg-green-200 border-2 border-green-500 "
          : ""
      }
      flex rounded-md hover:bg-green-200`}
    >
      <div className=" sm:block  p-2  ">{title}</div>
      <div className="hidden text-2xl font-bold  hover:scale-110">{icon}</div>
      <div>{isPathMatched(pathname, path)}</div>
    </Link>
  );
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-roboto text-sm flex flex-col ">

        {/* header */}
        <div className="shadow-md w-full flex px-4 md:px-8 h-16 items-center justify-center">
          {/* <div className="flex justify-self-start">
            <div className="text-xl text-darkGray font-bold">
              Emplois du temps
            </div>
          </div> */}
          <div className="flex gap-4 justify-center items-center ">
            <Menu
              title="Emplois du temps"
              path="/timetable"
              icon={<CiCalendar />}
            />
            <Menu title="Activités" path="/activities" icon={<CiBoxList />} />
            <Menu title="Paramètres" path="/parameters" icon={<CiSettings />} />
          </div>
        </div>

        {/* main */}
        <MenuProvider>
          <main>{children}</main>
        </MenuProvider>
      </body>
    </html>
  );
}

// facebook.com/g
// facebook.com/i
// facebook.com/j
// facebook.com/p
// facebook.com/u
