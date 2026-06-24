const prompt = require("prompt-sync")({ sigint: true });

let panjangMeter = Number(prompt("Masukkan panjang (meter): "));

let hasilInci = panjangMeter / 0.0254;
let hasilKaki = panjangMeter / 0.3048;
let hasilYard = panjangMeter / 0.9144;

console.log("Inci =", hasilInci);
console.log("Kaki =", hasilKaki);
console.log("Yard =", hasilYard);