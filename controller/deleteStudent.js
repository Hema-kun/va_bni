import { students } from "../model/students.js";

function deleteStudent(name) {
  const index = students.findIndex((student) => student.name === name);
  if (index !== -1) {
    students.splice(index, 1);
    console.log("berhasil dihapus")
  } else {
    console.warn(`Student with name "${name}" not found.`);
  }
}

export { deleteStudent };
