const prompt = require("prompt-sync")({ sigint: true });

let X= Number(prompt("masukkan X: "));
let Y = Number(prompt("masukkan Y: "));
let Z = Number(prompt("masukkan Z: "));

let temp = X;
X = Y;
Y = Z;
Z = temp;

console.log("X = ", X);
console.log("Y = ", Y);
console.log("Z = ", Z);