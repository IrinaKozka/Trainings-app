// import pgPromise from "pg-promise";

// const pgp = pgPromise();
// const db = pgp("postgres://postgres:postgres@localhost:5432/postgres");
//  export const users [
//     {

//     }
//  ]
// export async function courses() {
//   try {
//     const courses = await db.any("SELECT * FROM courses");
//     return courses;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to fetch courses from the database");
//   }
// }

// export async function users() {
//   try {
//     const users = await db.any("SELECT * FROM users");
//     return users;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to fetch courses from the database");
//   }
// }

// export async function getCourseById(id) {
//   try {
//     const course = await db.one("SELECT * FROM courses WHERE id = $1", [id]);
//     return course;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to fetch course from the database");
//   }
// }
