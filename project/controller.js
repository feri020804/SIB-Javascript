import users from "./model.js";

// Menampilkan data
const index = () => {
  // menampilkan data users
  console.log("Daftar Seluruh data pengguna");
  users.map((u, i) => {
    console.log(`${i + 1}. ${u.nama} | ${u.umur} | ${u.alamat} | ${u.email}`);
  });
};

// Menambahkan data user
const store = (user) => {
  users.push(user);
  console.log(`✅ User ${user.nama} berhasil ditambahkan`);
};

// Menghapus data user
const destroy = (indexUser) => {
  if (indexUser >= 0 && indexUser < users.length) {
    const removed = users.splice(indexUser, 1);
    console.log(`User ${removed[0].nama} berhasil dihapus`);
  } else {
    console.log(" Index tidak valid");
  }
};

export { index, store, destroy };
