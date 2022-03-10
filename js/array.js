const namaMantan = ["jamet", "ismed", "julaeha"];

// Mengakses array
// console.log(namaMantan[0]);


// Looping array
namaMantan.forEach(function (item, index, array) {
    console.log(item, index);
})

// tambah isi array, harus dipanggil lagi dibawah karena javaScript dijalankan dari atas ke bawah
// namaMantan.push("mayang sunda");
// console.log(namaMantan);

// Menghapus isi array terakhir
// namaMantan.pop();
// console.log(namaMantan);

// Menghapus isi array pertama
// namaMantan.shift();
// console.log(namaMantan);

// mencari nilai index dalam array
// console.log(namaMantan.indexOf("jamet") + 1)

// menghapus satu isi array
const mantanJamet = namaMantan.indexOf("jemet");
namaMantan.splice(mantanJamet, 1);
console.log(namaMantan);
