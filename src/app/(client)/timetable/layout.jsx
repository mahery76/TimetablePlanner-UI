import Link from "next/link"

export default function timetableLayout({children}) {
    return (
      <section>
       <div>
          <Link href="/timetable/student">Student</Link>
          <Link href="/timetable/teacher">Teacher</Link>
        </div>
        {children}
      </section>
    )
  }

  