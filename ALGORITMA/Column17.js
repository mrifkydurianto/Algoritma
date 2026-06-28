const prompt = require("prompt-sync")({ sigint: true });

let poin = Number(prompt("Masukkan poin ujian: "));

let grade = "";

if (poin >= 80) {
    grade = "A";
} else if (poin >= 70) {
    grade = "B";
} else if (poin >= 55) {
    grade = "C";
} else if (poin >= 40) {
    grade = "D";
} else {
    grade = "E";
}

console.log("Indeks Nilai Akhir:", grade);