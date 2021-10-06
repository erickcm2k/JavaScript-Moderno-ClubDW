const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Definimos una función de comparación.
// En este caso, será para ordenar números.

/**
 *
 * @param a  Primer valor a comparar
 * @param b  Segundo valor a comparar
 * @returns La función retorna -1 si a es menor que b. Retorna 1 si b es menor que a.
 */
const compareFunction = (a, b) => {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
};

// console.log(numbers);
// // console.log(numbers.sort());
// console.log(numbers.sort((a, b) => a - b));
// console.log(numbers.sort((a, b) => -(a - b)));

// console.log(numbers);

const ordenarPorNombre = (p1, p2) => {
  if (p1.nombre < p2.nombre) {
    return -1;
  } else {
    return 1;
  }
};

const personas = [
  { nombre: "Mariana", edad: 19, semestre: 7 },
  { nombre: "Luis", edad: 18, semestre: 1 },
  { nombre: "José", edad: 22, semestre: 4 },
  { nombre: "Pedro", edad: 26, semestre: 8 },
  { nombre: "John", edad: 25, semestre: 8 },
];

console.log(personas);
console.log("Personas ordenadas por nombre");
console.log(personas.sort(ordenarPorNombre));
console.log("Personas ordenadas por semestre (ascendentemente)");
console.log(personas.sort((p1, p2) => p1.semestre - p2.semestre));
console.log("Personas ordenadas por semestre (descendentemente)");
console.log(personas.sort((p1, p2) => -(p1.semestre - p2.semestre)));
