const prompt = require("prompt-sync")({ sigint: true });

let totalBelanja = Number(prompt("Masukkan total belanja: "));

let diskon = 0;
let bayar = 0;

if (totalBelanja > 100000) {
    diskon = totalBelanja * 0.10;
    bayar = totalBelanja - diskon;
} else {
    diskon = 0;
    bayar = totalBelanja;
}

console.log("Diskon harga = Rp" + diskon);
console.log("Harga setelah diskon = Rp" + bayar);