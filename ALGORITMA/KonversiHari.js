const prompt = require("prompt-sync")({ sigint: true });

let hari = Number(prompt("Masukkan hari nya : "));

let minggu = Math.floor(hari / 7);
let bulan = Math.floor(hari / 30);
let tahun = Math.floor(hari / 365);

console.log(`
${hari} hari = ${minggu} minggu
${hari} hari = ${bulan} bulan
${hari} hari = ${tahun} tahun
`);