let arreglo = [123, 'hello', 10.12]

let nuevoArreglo = [...arreglo];

console.log(arreglo);
console.log(nuevoArreglo);

nuevoArreglo.length = 0;

console.log(arreglo);
console.log(nuevoArreglo);