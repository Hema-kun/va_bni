import { addStudent } from "./controller/addStudent.js";
import { deleteStudent } from "./controller/deleteStudent.js";
import { updateStudent } from "./controller/updateStudent.js";
import { readStudent } from "./controller/readStudent.js";
import { students } from "./model/students.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let running = true;

while (running) {
  console.log("===== Program VA BNI ======");
  console.log("Pilih salah satu");
  console.log("1. Add");
  console.log("2. delete");
  console.log("3. update");
  console.log("4. read");
  console.log("5. read all");
  console.log("0. quit program");
  const pilih = Number(prompt("Masukkan pilihan nomor: "));

  switch (pilih) {
    case 1: {
      const name = prompt("Masukkan nama: ");
      const spp = Number(prompt("Masukkan jumlah spp: "));
      const sks = Number(prompt("Masukkan jumlah sks: "));
      addStudent(name, spp, sks);
      console.log(students);
      break;
    }
    case 2: {
      const name = prompt("Masukkan nama: ");
      deleteStudent(name);
      console.log(students);
      break;
    }
    case 3: {
      const name = prompt("Masukkan nama: ");
      const spp = Number(prompt("Masukkan jumlah spp: "));
      const sks = Number(prompt("Masukkan jumlah sks: "));
      updateStudent(name, spp, sks);
      console.log(students);
      break;
    }
    case 4: {
      const name = prompt("Masukkan nama: ");
      const result = readStudent(name);
      console.log(result);
      break;
    }
    case 5:
      console.log(students);
      break;

    case 0:
      running = false;
      break;

    default:
      console.log("Pilihan tidak dikenal.");
  }
}
