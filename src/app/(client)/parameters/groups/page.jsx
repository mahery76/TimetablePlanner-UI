"use client";
import React, { useEffect, useState } from "react";
import { getAllGroups } from "./_api/groupApi";
import GroupsList from "./_components/GroupsList";
import NewGroup from './_components/NewGroup'
import { db } from "@/_lib/indexedDb";
import { useRouter } from "next/navigation";


function groups() {
  const [groups, setGroups] = useState([]);
  const [majors, setMajors] = useState([])
  const router = useRouter();

  useEffect(() => {
    getAllGroups(setGroups);
    db.majors.toArray().then(setMajors)
  }, []);
  return (
    <div>
      <div className="mt-6">
        <GroupsList groups={groups} setGroups={setGroups} />
      </div>
      <div className="mt-8">
        <NewGroup router={router} majors={majors}/>
      </div>
    </div>
  );
}

export default groups;
