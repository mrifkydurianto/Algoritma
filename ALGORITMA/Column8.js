const prompt = require("prompt-sync")({ sigint: true });

let totalCm = Number(prompt("Masukkan jarak (cm): "));

let hasilKm = Math.trunc(totalCm / 100000);
let sisa = totalCm - (hasilKm * 100000);

let hasilMeter = Math.trunc(sisa / 100);
let hasilCm = sisa - (hasilMeter * 100);

console.log(hasilKm + " km");
console.log(hasilMeter + " m");
console.log(hasilCm + " cm");