const prompt = require("prompt-sync")({ sigint: true });

let tinggiBadan = Number(prompt("Masukkan tinggi badan dalam cm: "));

let hasilBerat = (tinggiBadan * 0.9) - 90;

console.log("Berat badan ideal =", hasilBerat, "kg");