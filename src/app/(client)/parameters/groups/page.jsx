"use client";
import React, { useEffect } from "react";
import { getAllGroups } from "./_api/groupApi";
import GroupsList from "./_components/GroupsList";
function groups() {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    getAllGroups(setGroups);
  }, []);
  return (
    <div>
      <div className="mt-6">
        <GroupsList groups={groups} setGroups={setGroups} />
      </div>
      <div className="mt-8">
        <NewClass groups={groups} setGroups={setGroups}/>
      </div>
    </div>
  );
}

export default groups;
