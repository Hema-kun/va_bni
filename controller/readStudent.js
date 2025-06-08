import { students } from "../model/students.js";

function readStudent(name) {
  const index = students.findIndex((student) => student.name === name);
  if (index !== -1) {
    return students[index];
  } else {
    console.warn(`Student with name "${name}" not found.`);
  }
}

export { readStudent };