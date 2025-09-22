// Array produk toko
const produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

// untuk menambah produk
const tambahProduk = function (data, nama, harga, stok) {
  return [...data, { id: data.length + 1, nama, harga, stok }];
};

// untuk menghapus produk
const hapusProduk = function (data, id) {
  return data.filter((produk) => produk.id !== id);
};

//untuk menampilkan produk
const tampilkanProduk = (data) =>
  data.map(
    (produk) =>
      `ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga}, Stok: ${produk.stok}`
  );

// --- Contoh penggunaan ---
let daftar = produkToko;

console.log("Produk Awal:");
console.log(tampilkanProduk(daftar).join("\n"));

console.log("Produk di tambahkan:");
daftar = tambahProduk(daftar, "TV", 1500000, 3);
console.log(tampilkanProduk(daftar).join("\n"));

console.log("Produk Di hapus");
daftar = hapusProduk(daftar, 2);
console.log(tampilkanProduk(daftar).join("\n"));
