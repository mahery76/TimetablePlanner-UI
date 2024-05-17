"use client"
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
function page() {
  const searchParams = useSearchParams()
  const {id: group_id} = useParams()
  const group_name = searchParams.get("group_name")
  return (
    <div>
      {group_id} {group_name}

    </div>
  )
}
export default page