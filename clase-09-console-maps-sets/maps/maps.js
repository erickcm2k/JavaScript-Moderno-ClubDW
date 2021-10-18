/**
 * Diferencias de Map vs Object
 * 
 * 1.- Tiene la propiedad size, los objetos no.
 * 2.- Son iterables
 * 3.- La llave puede ser un tipo de dato primitivo o no primitivo (tiene que ser una referencia)
 * 
 */

const nums = [1, 2, 3];
const miMap = new Map([
  ["a", 100],
  ["b", 200],
]);

miMap.set(3, 300);
miMap.set(nums, "Esto es un arreglo de numeros.");

console.table(miMap);

console.log(miMap.has('a'));
console.log(miMap.has(nums));
console.log(miMap.has([1,2,3]));

console.log(miMap.size);

miMap.forEach((e) => console.log(e));

console.log(miMap.keys());
console.log(miMap.entries());
console.log(miMap.values());