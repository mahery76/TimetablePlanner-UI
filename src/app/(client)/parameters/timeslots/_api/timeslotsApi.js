import { db } from "@/_lib/indexedDb";
export const getAllTimeslots = (setTimeslots) => {
    db.timeslots.toArray().then(setTimeslots);
  };