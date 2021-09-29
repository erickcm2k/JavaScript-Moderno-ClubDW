const nombres = ["Luis", "José", "John", "Aaron", "Fernando"];

// Todos los algoritmos aquí incluidos tienen una complejidad lineal O(n)

// reverse - invierte un arreglo
// console.log(nombres);
// console.log(nombres.reverse());

// forEach - ejecuta una acción sobre cada elemento de un arreglo.
// function saludar(nombre) {
//     console.log(`Hola, me llamo ${nombre}`);
// }
// nombres.forEach((name) => saludar(name))

// map(cb) - Retorna un nuevo arreglo, con las modificaciones al arreglo original
// que nosotros especifiquemos en el callback
// const capitalize = (nombre) => {
//     return nombre.toUpperCase();
// }

// console.log(nombres);
// const nombresEnMaYuscula = nombres.map(capitalize)
// console.log(nombresEnMaYuscula);

// const nums = [1,2,3,4,5,6];

// console.log(nums);
// console.log(nums.map((num) => num * num));

const personas = [
  { nombre: "Luis", edad: 18, semestre: 1 },
  { nombre: "José", edad: 22, semestre: 4 },
  { nombre: "John", edad: 25, semestre: 8 },
];

// find(cb) - Retorna el valor del primer elemento que cumple una condición
// especificada en el callback
// const buscarPorNombre = (persona) => persona.nombre === "Luis"
// console.log(personas.find(buscarPorNombre))

// filter(cb) - Retorna un arreglo con todos los elementos que cumplen la condición
// especificada por el callback
// console.log(personas.filter((persona) => persona.semestre === 10));

// findIndex(cb) - Retorna el índice del primer elemento de un arreglo que cumpla
// la consificón del callback
// console.log(personas.findIndex((persona) => persona.edad === 25));

// reduce(cb) - Retorna un único valor después de aplicar la función de reducción
// a cada elemento.

// const numbers = [10,20,30,40,50];
// console.log(numbers);
// const sum = numbers.reduce((sumReducer, num) => sumReducer + num);
// console.log(sum);

// concat(arreglo2) - Crea un nuevo arreglo a partir de dos arreglos
// const nums = [1,2,3,4];
// const nums2 = [5,6,7,8];
// const nums3 = nums.concat(nums2);
// console.log(nums);
// console.log(nums2);
// console.log(nums3);

// splice - Puede reemplazar, eliminar o agregar elementos en una cierta posición de nuestro arreglo
// console.log(nombres);
// REST OPERATOR (...)
//nombres.splice(0,0,...['Karen', "Miguel"]) // Agrega a karen y miguel en la posición 0, eliminando 0 elementos.
//nombres.splice(0,2,'Karen') // Agrega a karen en la posición 0, eliminando 2 elementos.
//nombres.splice(1,2);
// console.log(nombres);

// slice - Retorna un subarreglo
// console.log(nombres);
// console.log(nombres.slice(2,4))

// some - devuelve true o false si al menos un elemento del arreglo cumple la condición del callback
// console.log(personas);
// console.log(personas.some((persona) => persona.edad === 15))

// every - devuelte true o false si TODOS los elementos del arreglo cumplen la condición del callback
// console.log(personas);
// console.log(personas.every((persona) => persona.edad > 15));

// join(separador) - une todos los elementos de un arreglo en una cadena,
// podemos especificar un separador entre cada elemento

// console.log(nombres);
// console.log(nombres.join(''));
// console.log(nombres.join(' '));
// console.log(nombres.join('-'));

const myStr = 'fuihduhi43u93hdiuhs'

// console.log(myStr);
// console.log(myStr.split(''));

console.log(myStr); // cadena original
console.log(myStr.split('')); // cadena convertida a arreglo de caracteres
console.log(myStr.split('').map((caracter) => caracter.toUpperCase())); // convierte cada caracter de nuestro arreglo a mayúscula
console.log(myStr.split('').map((caracter) => caracter.toUpperCase()).join('')); // regresamos a una cadena.