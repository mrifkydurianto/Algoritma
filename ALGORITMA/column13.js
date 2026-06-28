const prompt = require("prompt-sync")({ sigint: true });

let inputTahun = Number(prompt("Masukan tahun: "));

let hasil = "";

if (inputTahun % 4 !== 0) {
    hasil = inputTahun + " bukan tahun kabisat";
} else {
    hasil = inputTahun + " adalah tahun kabisat";
}

console.log(hasil);