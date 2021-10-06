"use strict";
const persona = {
    name: "Juan",
    age: 25,
    height: 180,
    favColor: ["blue", "red", "pink"],
  };
// keys(obj) - Retorna un arreglo con las llaves del objeto pasado como parámetro.
//console.log(Object.keys(persona));

// values(obj) - retorna los valores del objeto
// console.log(Object.values(persona));

// entries(obj) - Retorna un arreglo de pares. Un par se conforma de una llave y su valor.
//console.log(Object.entries(persona));

// fromEntries(obj) - Crear un objeto a partir de un arreglo de pares.
// Hace lo contrario al método entries.
// const temp = Object.entries(persona);
// console.log(temp);
// const newObject = Object.fromEntries(temp);
// console.log(newObject);

// is(val1, val2) - compara dos valores.
// console.log(Object.is(100, 100));
// console.log(Object.is("hello", "hello"));
// console.log(Object.is([1, 2, 3], [1, 2, 3]));

// const obj1 = { a: 10, b: 20, c: 30 };
// const obj2 = { a: 10, b: 20, c: 30 };
// // const objRef1 = obj;
// // const objRef2 = obj;
// // Hacer esto es una muy mala práctica.
// console.log(Object.is(JSON.stringify(obj1), JSON.stringify(obj2)));

// freeze(obj) - evita que se agreguen o eliminen propiedades del objeto
// const persona = {
//   name: "Juan",
//   age: 25,
//   height: 180,
//   favColor: ["blue", "red", "pink"],
// };

//Object.freeze(persona);



/**
 * ¿Qué hace el modo estricto?
 * 
 * Las equivocaciones (errores silenciosos) ahora van a arrojar errores.
 * Al corregir errores, el código se ejecuta ligeramente más rápido.
 * Impide que se puedan usar características del lenguaje que aún no se han agregado.
 */

// isFrozen(obj) - Te informa si a un objeto se le ha aplicado freeze
// console.log(Object.isFrozen(persona));

// assign(target, source) - Asigna las propiedades del objeto "source"ç
// al objeto "target".
// const obj1 = {a: 100, b: 200}
// const obj2 = {b: 300, d: 400}

// //const obj3 = Object.assign(obj1, obj2) // En este caso estamos agregando propiedades a obj1.
// // const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// defineProperty(objeto, propiedad, descriptores) - define una nueva propiedad
// o modifica una existente.

// console.log(persona);

// Object.defineProperty(persona, 'school', {
//     value: 'ESCOM', // Valor del campo, puede ser cualquier tipo de dato.
//     writable: false, // Establece si el valor se puede modificar o si solo es de lectura.
//     enumerable: true, // Se muestre en la lista de propiedades, por ejemplo al usar Object.keys()
//     configurable: false // Definir si la propiedad puede ser eliminada del objeto o modificada.
// })
// console.log(persona);
// delete persona.school;
// console.log(persona);

// getOwnPropertyDescriptor(obj, propiedad) -- Retorna un objeto con los descriptores del campo elegido.
//console.log(Object.getOwnPropertyDescriptor(persona, 'name'));

// getOwnPropertyDescriptors(obj) -- Retorna un objeto con los descriptores de cada uno de los campos
//console.log(Object.getOwnPropertyDescriptors(persona));

// getOwnPropertyNames(obj) - Retorna todas las propiedades de un objeto
// vs keys(objs) 
// keys retorna solo las propiedades ENUMERABLES
// getOwnPropertyNames retorna TODAS las propiedades
console.log(Object.getOwnPropertyNames(persona));