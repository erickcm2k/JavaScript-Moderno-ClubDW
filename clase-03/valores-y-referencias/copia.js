// Los tipos de datos primitivos (number, string, null, undefined, symbol)
// SIEMPRE van a ser una copia.

function swap(a,b) {
    let temp = a;
    a = b;
    b = temp;
}

let x = 10;
let y = 100;

console.log(x, y);
swap(x, y)
console.log(x, y);