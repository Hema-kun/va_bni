import { students } from "../model/students.js";

function addStudent(name, spp, sks) {
  if (typeof spp && typeof sks !== "number") {
    console.log("gagal ditambah");
  } else {
    const user = {
      name: name,
      SPP: spp,
      SKS: sks,
    };

    students.push(user);
    console.log("berhasil di tambah");
  }
}

export { addStudent };
