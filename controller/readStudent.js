import { students } from "../model/students.js";

function readStudent(NPM) {
  const index = students.findIndex((student) => student.NPM === NPM);
  if (index !== -1) {
    console.log(students[index]);
  } else {
    console.warn(`Student with NPM "${NPM}" not found.`);
  }
}

export { readStudent };