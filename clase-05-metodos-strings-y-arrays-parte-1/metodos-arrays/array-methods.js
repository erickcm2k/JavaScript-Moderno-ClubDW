const nombres = ["Luis", "José", "John", "Aaron", "Fernando"]

// Todos los algoritmos aquí incluidos tienen una complejidad lineal O(n)

// reverse - invierte un arreglo
// console.log(nombres);
// console.log(nombres.reverse());

// forEach - ejecuta una acción sobre cada elemento de un arreglo.

// function saludar(nombre) {
//     console.log(`Hola, mi nombre es: ${nombre}`);
// }

// nombres.forEach(saludar);
// nombres.forEach((nombre, indice) =>{
//      saludar(nombre)
//     });

const saludar = (nombre, indice, arreglo) => {
    console.log(`Hola, mi nombre es: ${nombre} y mi índice es ${indice}`);
}

// nombres.forEach(saludar);

for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}