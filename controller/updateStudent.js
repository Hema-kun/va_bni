import { students } from "../model/students.js";

function updateStudent(name, spp, sks) {
  if (typeof spp && typeof sks !== "number") {
    console.log("gagal ditambah");
  } else {
    const user = {
      name: name,
      SPP: spp,
      SKS: sks,
    };

    const index = students.findIndex((student) => student.name === name);
    if (index !== -1) {
      students.splice(index, 1, user);
      console.log("berhasil diupdate")
    } else {
      console.warn(`Student with name "${name}" not found.`);
    }
  }
}

export { updateStudent };
