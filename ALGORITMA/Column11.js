const prompt = require("prompt-sync")({ sigint: true });

let nilaiX = Number(prompt("Input nilai X: "));
let nilaiY = Number(prompt("Input nilai Y: "));

let hasil = "";

if (nilaiX === 0 || nilaiY === 0) {
    hasil = "Titik tidak berada di kuadran manapun";
} else if (nilaiX > 0) {
    if (nilaiY > 0) {
        hasil = "Titik berada di Kuadran I";
    } else {
        hasil = "Titik berada di Kuadran IV";
    }
} else {
    if (nilaiY > 0) {
        hasil = "Titik berada di Kuadran II";
    } else {
        hasil = "Titik berada di Kuadran III";
    }
}

console.log(hasil);