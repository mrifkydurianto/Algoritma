const prompt = require("prompt-sync")({ sigint: true });

let angka = Number(prompt("Masukkan angka (1-4): "));

let tulisan = "";

if (angka == 1) {
    tulisan = "satu";
} else if (angka == 2) {
    tulisan = "dua";
} else if (angka == 3) {
    tulisan = "tiga";
} else if (angka == 4) {
    tulisan = "empat";
} else {
    tulisan = "Angka yang dimasukkan salah";
}

console.log(tulisan);