const prompt = require("prompt-sync")({ sigint: true });

let angka = Number(prompt("Masukkan bilangan bulat positif: "));

if (angka % 4 == 0) {
    console.log(angka + " merupakan kelipatan 4");
} else {
    console.log(angka + " bukan kelipatan 4");
}