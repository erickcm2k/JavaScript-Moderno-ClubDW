"use strict";
// Destructuración de objetos (object destructuring)

/**
 *
 * Forma antigua, común en otros lenguajes de programación.
 *
 */

// const nombre = persona.nombre;
// const pais = persona.pais;
// const edad = persona.edad;

// console.log(nombre);
// console.log(pais);
// console.log(edad);

/**
 *
 * Nuevo en ECMAScript 6 -
 *
 */

// const { nombre, pais, edad } = persona;
// console.log(nombre);
// console.log(pais);
// console.log(edad);

/**
 *
 * Previa declaración
 */

// let nombre, pais, edad;
// ({ nombre, pais, edad } = persona);
// console.log(nombre);
// console.log(pais);
// console.log(edad);

/**
 *
 * Asignar nombres nuevos.
 *
 */

// const {nombre: newName, pais: country} = persona;

// console.log(newName);
// console.log(country);

/**
 *
 * Valores por defecto
 *
 */

// const persona = {
//   nombre: "Andrés",
//   pais: "Mexico",
//   edad: 23,
//   ocupacion: "desarrollador",
// };

// const {
//   nombre: newName = "Default name",
//   pais: country = "Sudáfrica",
//   altura = -1,
// } = persona;

// console.log(newName);
// console.log(country);
// console.log(altura);

/**
 *
 * Elementos restantes.
 *
 */

// const { nombre, edad, ...otrosElementos } = persona; // REST Operator

// console.log(nombre);
// console.log(edad);
// console.log(otrosElementos);

/**
 *
 * Objetos anidados
 *
 */
const persona = {
  nombre: "Andrés",
  pais: "Mexico",
  edad: 23,
  ocupacion: "desarrollador",
  datos: {
    RFC: "23KJEKJNW2KJN2",
    CURP: "3KJN3KJN43KJN43",
  },
};

const {
  nombre,
  edad,
  //datos: { RFC, CURP }, // Se ve muy sucio
  datos,
} = persona;
const { RFC, CURP } = datos;

console.log(nombre);
console.log(edad);
console.log(RFC);
console.log(CURP);
