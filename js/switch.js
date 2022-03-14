// const foo = "papayas";
// let namaBuah = "";

// switch (foo) {
//     case "papayas":
//         namaBuah = "Pepaya";
//         break;

//     case "Salakk":
//         namaBuah = "Salak aja";
//         break;

//     default:
//         namaBuah = "Itu adalah buah";
//         break;

// }
// console.log(namaBuah);

const nomor = 1;

function namaBuah(nomor) {
    switch (nomor) {
        case 1:
        case 5:
            return "apel";
        case 2:
            return "jambu";
        case 3:
            return "mangga";
        default:
            return "semangka";
    }
}

console.log(namaBuah(5))





