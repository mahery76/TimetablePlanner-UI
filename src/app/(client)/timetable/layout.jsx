"use client";
import Link from "next/link";
import { useState } from "react";

export default function timetableLayout({ children }) {

  return (
    <section>
        <div>
          <Link href="/timetable/group">Classe</Link>
          <Link href="/timetable/teacher">Enseignant</Link>
        </div>
      {children}
    </section>
  );
}


