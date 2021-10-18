const miSet = new Set([1, 2, 3]);
const obj1 = { a: 10, b: 20 };
const obj2 = { c: 30, d: 40 };

// miSet.add(obj1);
// miSet.add(obj2);
miSet.add(4);
miSet.add(5);
miSet.add(6);
miSet.add(6);
miSet.add(6);
miSet.add(6);
miSet.add(6);
miSet.add(6);
miSet.add(6);
miSet.delete(1);
// console.log(miSet);
// console.log(miSet.has(4));
//miSet.clear();
// console.log(miSet);
// console.log(miSet.entries());
// console.log(miSet.values());

// console.log(miSet instanceof Set);
// console.log(miSet instanceof Object);

const A = new Set([1, 2, 3, 4, 5, 6]);
const B = new Set([5, 6, 7, 8, 9, 10]);
/**
 *
 * Realizamos operaciones básicas con conjuntos.
 *
 */
console.log("A", A);
console.log("B", B);

// Operación unión. AUB
const union = new Set([...A, ...B]); // SPREAD operator
console.log(union);

// Operación intersección AnB
const interseccion = new Set([...A].filter((e) => B.has(e)));
console.log(interseccion);

// Operación diferencia A-B
const diferencia = new Set([...A].filter((e) => !B.has(e)));
console.log(diferencia);
