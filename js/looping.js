const namaMantan = ["jamet", "ismed", "julaeha", "inem"];

// Mengakses array
// console.log(namaMantan[0]);


// Looping array
// namaMantan.forEach(function (item, index, array) {
//     console.log(item, index);
// })

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
// const mantanJamet = namaMantan.indexOf("jemet");
// namaMantan.splice(mantanJamet, 1);
// console.log(namaMantan);

// Array method reduce
// console.log(
//     namaMantan.reduce(function (acc, mantan, ke) {
//         acc[mantan] = `Mantan ke ${ke + 1}`;

//         return acc;
//     }, {})
// );


// looping for
// for (let index = 0; index < namaMantan.length; index++) {
//     let element = namaMantan[index];

//     console.log(element);
// }

// looping while
// let index = 0;
// while (index < namaMantan.length) {
//     const element = namaMantan[index];
//     console.log(element);
//     index++;
// }


// method map
console.log(
    namaMantan
        .filter(function (mantan, ke) {
            return mantan != "ismed";
        })
        .map(function (mantan, ke) {
            return `${mantan} adalah mantan ke ${ke + 1} `;
        })
);
