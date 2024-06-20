"use client";
import React, { useEffect, useState } from "react";
import { getAllcore_class_refs } from "@/api/core_class_refsApi";
import CoreClassRefsList from "./_components/CoreClassRefsList"
import NewCoreClassRef from "./_components/NewCoreClassRef"

function core_classes() { 
  const [core_class_refs, setCore_class_refs] = useState([]);
  useEffect(() => {
    getAllcore_class_refs(setCore_class_refs);
  }, []);
  return (
    <div>
      <div className="mt-6">
        <CoreClassRefsList core_class_refs={core_class_refs} setCore_class_refs={setCore_class_refs}/>
      </div>
      <div className="mt-8">
        <NewCoreClassRef core_class_refs={core_class_refs} setCore_class_refs={setCore_class_refs}/>
      </div>
    </div>
  );
}

export default core_classes;
