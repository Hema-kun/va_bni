import { students } from "../model/students.js";

function updateStudent(NPM, Name, SPP, SKS) {
  if (!students.some((s) => s.NPM === NPM)) {
    console.log("Gagal : 'Data tidak ada'");
  } else if (typeof SPP !== "number" && typeof SKS !== "number") {
    console.log("gagal ditambah");
  } else {
    const user = {
      NPM: NPM,
      Name: Name,
      SPP: SPP,
      SKS: SKS,
    };

    const index = students.findIndex((student) => student.NPM === NPM);
    students.splice(index, 1, user);
    console.log("berhasil diupdate");
  }
}

export { updateStudent };
