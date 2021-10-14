/**
 *
 * Destructuración de arreglos
 *
 */

/**
 *
 * Manera antigua de hacerlo. Común en otros lenguajes de programación.
 *
 */

// const nombre = datos[0];
// const mascota = datos[1];

// console.log(nombre);
// console.log(mascota);

/**
 *
 * Destructuración de arreglos - Nuevo en ECMAScript 6
 *
 */
//      0       1
// const [nombre, mascota, numeros] = datos;
// console.log(nombre);
// console.log(mascota);
// console.log(numeros);

/**
 *
 * Previa declaración
 *
 */

// let nombre, mascota;
// [nombre, mascota] = datos;

// console.log(nombre);
// console.log(mascota);

/**
 *
 * Elementos restantes
 *
 */
const datos = [
  "Jose",
  { nombre: "Doug", especie: "Perro" },
  [1, 2, 3],
  "fddf",
  664,
];

const [nombre, ...restantes] = datos; // REST Operator (...)

console.log(nombre);
console.log(restantes);

/**
 *
 * Saltarnos elementos
 */

// const [nombre, , , emoji] = datos;
// console.log(nombre);
// console.log(emoji);

/**
 *
 * Valores por defecto
 *
 */

// const [nombre = "Nombre por defecto", , , emoji = "😶"] = datos;
// console.log(nombre);
// console.log(emoji);

/**
 *
 * Intercambiar valores
 *
 */
// let a = 10;
// let b = 20;

// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);

/**
 *
 * Destructurar el valor de retorno de una función
 *
 */

// function usuarioYSaludo() {
//   return ["Gerardo", () => console.log("Hola, mundo")];
// }

// const [nombre, saludar] = usuarioYSaludo();

// console.log(nombre);
// saludar();
