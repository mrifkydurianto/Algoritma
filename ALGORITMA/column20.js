const prompt = require("prompt-sync")({ sigint: true });

let waktu = prompt("Masukkan jam (hh:mm:ss): ");

let data = waktu.split(":");

let jam = Number(data[0]);
let menit = Number(data[1]);
let detik = Number(data[2]);

detik++;

if (detik == 60) {
    detik = 0;
    menit++;
}

if (menit == 60) {
    menit = 0;
    jam++;
}

if (jam == 24) {
    jam = 0;
}

console.log(
    "Jam baru = " +
    String(jam).padStart(2, "0") + ":" +
    String(menit).padStart(2, "0") + ":" +
    String(detik).padStart(2, "0")
);