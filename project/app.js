import { index, store, destroy } from "./controller.js";
const main = () => {
  index();

  // tambah 2 user
  store({ nama: "Kevin", umur: 20, alamat: "Bali", email: "kevin@mail.com" });
  store({ nama: "Lina", umur: 19, alamat: "Padang", email: "lina@mail.com" });

  console.log(" Setelah Tambah ");
  index();

  // menghapus data index ke-1 (user kedua)
  destroy(1);
  console.log(" Setelah Hapus ");
  index();
};

main();
