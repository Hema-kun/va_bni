import { addStudent } from "./controller/addStudent.js";
import { deleteStudent } from "./controller/deleteStudent.js";
import { updateStudent } from "./controller/updateStudent.js";
import { readStudent } from "./controller/readStudent.js";
import { students } from "./model/students.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let running = true;

while (running) {
  console.log("\n");
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
      const npm = Number(prompt("Masukkan NPM : "));
      const name = prompt("Masukkan nama: ");
      const spp = Number(prompt("Masukkan jumlah spp: "));
      const sks = Number(prompt("Masukkan jumlah sks: "));
      addStudent(npm, name, spp, sks);
      break;
    }
    case 2: {
      const npm = Number(prompt("Masukkan NPM : "));
      const confirm = prompt(`Yakin ingin menghapus NPM ${npm}? (y/n): `);
      if (confirm.toLowerCase() === "y") {
        deleteStudent(npm);
      } else {
        console.log("Batal dihapus");
      }
      break;
    }
    case 3: {
      const npm = Number(prompt("Masukkan NPM : "));
      const name = prompt("Masukkan nama: ");
      const spp = Number(prompt("Masukkan jumlah spp: "));
      const sks = Number(prompt("Masukkan jumlah sks: "));
      updateStudent(npm, name, spp, sks);
      break;
    }
    case 4: {
      const npm = Number(prompt("Masukkan NPM : "));
      readStudent(npm);
      break;
    }
    case 5:
      console.log("===== Semua Mahasiswa =====");
      students.forEach((s, i) => {
        console.log(
          `${i + 1}. NPM: ${s.NPM}, Nama: ${s.Name}, SPP: ${s.SPP}, SKS: ${
            s.SKS
          }`
        );
      });
      break;

    case 0:
      console.log("Program dihentikan. Terima kasih!");
      running = false;
      break;

    default:
      console.log("Pilihan tidak dikenal.");
  }
}
