// Para JavaScript

// Los tipos de datos primitivos (boolean, string, number, symbol, null y undefined).
// son INMUTABLES

// let num1 = 10;
// let str1 = 'Hola';
// let boolean1 = true;

// console.log(num1, str1, boolean1);

// // Para actualizar, tenemos que cambiar todo el contenido de la variable.

// num1 += 100; // num1 = num1 + 100;
// str1 += ' ,mundo.'
// boolean = false;

// console.log(num1, str1, boolean1);

// let myStr = 'soy un ejemplo'

// console.log(myStr);

// myStr[0] = 'D'

// console.log(myStr);



// Los tipos de datos no primitivos (Object (array, Object,etc...)) (referencias), 
// son MUTABLES

let arr1 = [1,2,3]
let obj1 = {a: 10, b: 20}

console.log(arr1);
console.log(obj1);

arr1.push(4);
obj1.c = '30';

console.log(arr1);
console.log(obj1);