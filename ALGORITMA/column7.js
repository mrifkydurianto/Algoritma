const prompt = require("prompt-sync")({ sigint: true });

let uang = Number(prompt("Masukkan Jumlah Uang: "));

let rp1000 = Math.floor(uang / 1000);
uang %= 1000;

let rp500 = Math.floor(uang  / 500);
uang %= 500;

let rp100 = Math.floor(uang / 100);
uang %= 100;

let rp50 = Math.floor(uang / 50);
uang %= 50;

let rp25 = Math.floor(uang / 25);

console.log("Rp1000 = ", rp1000);
console.log("Rp500 = ", rp500);
console.log("Rp100 = ", rp100);
console.log("Rp50 = ", rp50);
console.log("Rp25 = ", rp25);