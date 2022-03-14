
// function expretion
// function foo(e = 0) {
//     return e + 1;
// }
// console.log(foo(1));

// function yang tidak di definisikan
// (function (x = 0) {
//     console.log(x + 1);
// })(1);

// arraw function
// const foo = (x = 0) => {
//     return x + 1;
// }
// console.log(foo(1))

// inner function
// function addSquare(a, b) {
//     function square(x) {
//         return x * x;
//     }

//     return square(a) + square(b);
// }
// console.log(addSquare(1, 2));

// function recursive
function loop(x) {
    if (x >= 10) return
    console.log(x);
    loop(x + 1);
}

loop(6);