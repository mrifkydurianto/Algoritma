const prompt = require("prompt-sync")({ sigint: true });

let a = Number(prompt("Masukkan sisi a: "));
let b = Number(prompt("Masukkan sisi b: "));
let c = Number(prompt("Masukkan sisi c: "));

if (a + b <= c) {
    console.log("Bukan segitiga");
} else {
    let hasil = (a * a) + (b * b);

    if (hasil == c * c) {
        console.log("Segitiga siku-siku");
    } else if (hasil > c * c) {
        console.log("Segitiga lancip");
    } else {
        console.log("Segitiga tumpul");
    }
}