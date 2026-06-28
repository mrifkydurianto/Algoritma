const prompt = require("prompt-sync")({ sigint: true });

let angka = Number(prompt("Masukkan bilangan: "));

let hasil = "";

if (angka > 0) {
    hasil = "Hasil: Positif";
} else if (angka < 0) {
    hasil = "Hasil: Negatif";
} else {
    hasil = "Hasil: Nol";
}

console.log(hasil);