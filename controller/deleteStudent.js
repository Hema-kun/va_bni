import { students } from "../model/students.js";

function deleteStudent(NPM) {
  const index = students.findIndex((student) => student.NPM === NPM);
  if (index !== -1) {
    students.splice(index, 1);
    console.log("berhasil dihapus")
  } else {
    console.warn(`Student with NPM: "${NPM}" not found.`);
  }
}

export { deleteStudent };
