const prompt = require("prompt-sync")({ sigint: true });

let nama = prompt("Masukkan nama karyawan: ");
let golongan = prompt("Masukkan golongan (A/B/C/D): ").toUpperCase();
let jam = Number(prompt("Masukkan jumlah jam kerja: "));

let upah = 0;

if (golongan === "A") {
    upah = 4000;
} 

if (golongan === "B") {
    upah = 5000;
} 

if (golongan === "C") {
    upah = 6000;
} 

if (golongan === "D") {
    upah = 7500;
} 

if (upah === 0) {
    console.log("Golongan tidak valid");
} else {
    let gaji = jam <= 48 
        ? jam * upah 
        : (48 * upah) + ((jam - 48) * 3000);

    console.log("Nama Karyawan :", nama);
    console.log("Golongan       :", golongan);
    console.log("Gaji Mingguan  : Rp" + gaji);
}