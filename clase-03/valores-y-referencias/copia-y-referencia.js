// Los tipos de datos no primitivos (object)
// SIEMPRE se pasan como una referencia.

function elevarAlCuadrado(A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = A[i] * A[i];
  }
}

function elevarAlCuadradoSinModificar(A) {
    let copia = [...A] // Spread operator
    // let copia = {...A}
    for (let i = 0; i < copia.length; i++) {
        copia[i] = copia[i] * copia[i];
    }
  }

let nums = [1, 2, 3, 4, 5, 6, 7];

console.log('ORIGINALES');
console.log(nums);
elevarAlCuadrado(nums); // Estamos haciendo una modificación al valor original.
elevarAlCuadrado([...nums]); // Spread operator - Directamente pasamos una copia.
elevarAlCuadradoSinModificar(nums)
console.log('MODIFICADOS');
console.log(nums);
