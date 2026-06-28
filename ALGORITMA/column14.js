const prompt = require("prompt-sync")({ sigint: true });

let nilaiTahun = Number(prompt("Masukkan tahun: "));

let kabisat = false;

if (nilaiTahun % 400 === 0) {
    kabisat = true;
} else if (nilaiTahun % 100 === 0) {
    kabisat = false;
} else if (nilaiTahun % 4 === 0) {
    kabisat = true;
}

if (kabisat) {
    console.log(nilaiTahun + " adalah tahun kabisat");
} else {
    console.log(nilaiTahun + " bukan tahun kabisat");
}