import { students } from "../model/students.js";

function addStudent(NPM, Name, SPP, SKS) {
  if (students.some((s) => s.NPM === NPM)) {
    console.log("Gagal : 'Data sudah ada'");
  } else if (typeof SPP !== "number" && typeof SKS !== "number") {
    console.log("gagal ditambah : 'input harus number'");
  } else {
    const user = {
      NPM: NPM,
      Name: Name,
      SPP: SPP,
      SKS: SKS,
    };

    students.push(user);
    console.log("berhasil di tambah ");
  }
}

export { addStudent };
