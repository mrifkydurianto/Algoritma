const prompt = require("prompt-sync")({ sigint: true });

let detik = Number(prompt("Masukkan detik nya : "));

let hari = Math.floor(detik / 86400);
let sisaDetik = detik % 86400;

let jam = Math.floor(sisaDetik / 3600);
sisaDetik = sisaDetik % 3600;

let menit = Math.floor(sisaDetik / 60);
let detikSisa = sisaDetik % 60;

console.log(`
Hasil konversi:
${detik} detik = ${hari} hari ${jam} jam ${menit} menit ${detikSisa} detik
`);