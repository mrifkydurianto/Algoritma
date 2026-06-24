const prompt = require("prompt-sync")({ sigint: true });

let Day1 = Number(prompt("tanggal 1: "));
let Month1 = Number(prompt("bulan 1: "));
let Year1 = Number(prompt("tahun 1: "));

let Day2 = Number(prompt("tanggal 2: "));
let Month2 = Number(prompt("bulan 2: "));
let Year2 = Number(prompt("tahun 2: "));

let total1 = Year1 * 365 + Month1 * 30 + Day1;
let total2 = Year2 * 365 + Month2 * 30 + Day2;

let selisih = Math.abs(total2 - total1);

let tahun = Math.floor(selisih / 365);
let bulan = Math.floor((selisih % 365) / 30);
let hari = (selisih % 365) % 30;

console.log("Selisih:");
console.log(tahun + " tahun");
console.log(bulan + " bulan");
console.log(hari + " hari");