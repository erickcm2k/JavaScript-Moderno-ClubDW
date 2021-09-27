const nombres = ["Luis", "José", "John", "Aaron", "Fernando"]

// push() - O(1) - Agrega elementos al final del arreglo.
// console.log(nombres);
// nombres.push("Gerardo");
// console.log(nombres);

// pop() - O(1) - Elimina un elemento al final del arreglo
// también retorna el valor del elemento eliminado
// console.log(nombres);
// console.log(nombres.pop());
// console.log(nombres);

// shift() - O(n) - Elimina el primer elemento del arreglo
// Para esto, se crea un nuevo arreglo, en el cual se copian
// todos los elementos del viejo arreglo sin incluir el primero
// retorna el valor del elemento eliminado.
// console.log(nombres);
// console.log(nombres.shift());
// console.log(nombres);

// unshift() - O(n) - Agrega un elemento al principio del arreglo
// Para esto, se crea un nuevo arreglo, en el cual se copian
// el nuevo valor, seguido de todos los elementos del viejo arreglo
// console.log(nombres);
// nombres.unshift('Jorge')
// console.log(nombres);