const suma = (x, y) => x + y
const mult = (x, y) => x * y
const resta = (x, y) => x - y
// const = (x, y) => x y

const operaciones = (cb, x, y) => {
    const resultado = cb(x, y);
    console.log(`El resultado es: ${resultado}`);
}

// operaciones(suma, 10, 20);
// operaciones(resta, 10, 20);
// operaciones(mult, 10, 20);
// // operaciones(function(x,y) {
// //     return x / y;
// // },10, 20);
// operaciones((x, y) => x / y,10, 20)

const retornarMayor = (x, y) => {
    if(x > y) {
        return x;
    } else {
        return y;
    }
}

operaciones(retornarMayor, 10, 20)
