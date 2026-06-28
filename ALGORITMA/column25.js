const prompt = require("prompt-sync")({ sigint: true });

let karakter = prompt("Masukkan digit: ");

if (karakter >= "0" && karakter <= "9") {
    console.log("Hasil konversi:", Number(karakter));
} else {
    console.log("Hasil konversi:", -99);
}