const str = "Esta es mi cadena! Hola, mundo!"

// charAt(n) - imprimir el caracter en la posición n
// console.log(str.charAt(0));
// console.log(str[0]);

// indexOf(string) - Retorna la posición donde se encuentre el caracter especificado
// si hay más de una ocurrencia, devolverá el primer elemento
// devuelve -1 si es que no encuentra nada.
// console.log(str.indexOf('Hola'));

// lastIndexOf(string) - Retorna la posición donde se encuentr el caracter especificado
// sí hay más de una ocurrencia, devolverá el índice de la última
// console.log(str.lastIndexOf('a'));

// replace(nuevaCadena) - Busca una expresión, si la encuentra la reemplazará
// por el valor del segundo argumento
// console.log(str.replace('!', '?'));

let newStr = "hola, mundo, como, estan , , , , ,"

// split(separador) - divide una cadena con base a un separador específico.
// retorna un arreglo
// console.log(newStr.split(','));
// console.log(newStr.split(''));

// substr(inicio, longitud) - retorna una subcadena con base en un índice y una longitud
// console.log(str.substr(5,6));

// substring(inicio, fin) - retorna una subcadena, indicamos de dónde a dónde
// console.log(str.substring(0,str.length));

// toLowerCase() - retorna una nueva cadena, con todos sus elementos en minúscula
// console.log(newStr.toLowerCase());

// toUpperCase() - retorna una nueva cadena, con todos sus elementos en MAYÚSCULA
// console.log(newStr.toUpperCase());

const cadenaFea = "    hola, mundo   "
// trim() - retorna una nueva cadena, eliminando los espacios vacíos
// OJO: Elimina los espacios vacíos del principio y del final
// console.log(cadenaFea);
// console.log(cadenaFea.trim());

// concat() - une dos cadenas
// const c1 = 'Hola, como estas'
// const c2 = ' mi nombre es Juan'

// const c3 = c1.concat(c2)
// console.log(c3);

// charCodeAt() - devolver el valor unicode
// console.log(str.charCodeAt(0));

// includes() - devuelve true si encuentra la expresión a buscar
// devuelve false en caso de no encontrarla
// console.log(cadenaFea.includes('hola'));
// console.log(cadenaFea.includes('hello'));

// repeat(n) - devuelve la cadena repetida n veces
// console.log(cadenaFea.repeat(5));

// padEnd(caracteresACumplir, cadena) y padStart(caracteresACumplir, cadena) 
// const num = "5"
// console.log(num.padEnd(7, 'J'));
// console.log(num.padStart(7, '0a'));