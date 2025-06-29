import { cache } from "react";
// import db from './drizzle'
import db from "@/db/drizzle";

// export const getCourses = cache(async () => {
//   const data = await db.query.courses.findMany();
//   return data.reverse();
// });


export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany({
    orderBy: (courses, { asc }) => [asc(courses.id)]
  });
  return data;
});
