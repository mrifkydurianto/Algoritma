const prompt = require("prompt-sync")({ sigint: true });

let totalJam = Number(prompt("Masukkan jam kerja: "));

let gajiNormal = 0;
let gajiLembur = 0;

if (totalJam > 48) {
    let jamTambahan = totalJam - 48;
    gajiNormal = 48 * 2000;
    gajiLembur = jamTambahan * 3000;
} else {
    gajiNormal = totalJam * 2000;
}

let totalUpah = gajiNormal + gajiLembur;

console.log("Upah mingguan = Rp" + totalUpah);