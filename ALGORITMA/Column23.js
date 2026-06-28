const prompt = require("prompt-sync")({ sigint: true });

let a = Number(prompt("Masukkan bilangan pertama: "));
let b = Number(prompt("Masukkan bilangan kedua: "));
let c = Number(prompt("Masukkan bilangan ketiga: "));

let kecil;
let tengah;
let besar;

if (a <= b && a <= c) {
    kecil = a;

    if (b <= c) {
        tengah = b;
        besar = c;
    } else {
        tengah = c;
        besar = b;
    }

} else if (b <= a && b <= c) {
    kecil = b;

    if (a <= c) {
        tengah = a;
        besar = c;
    } else {
        tengah = c;
        besar = a;
    }

} else {
    kecil = c;

    if (a <= b) {
        tengah = a;
        besar = b;
    } else {
        tengah = b;
        besar = a;
    }
}

console.log("Urutan bilangan:", kecil, tengah, besar);