var persona = {
    nombre: "Juan",
    edad: 20,
    ocupacion: "desarrollador",
    coloresFavoritos: ["blanco", "rojo", "amarillo"] 
}

// console.log(persona)
// console.log(persona.nombre)

var descripcion = `Hola, soy ${persona.nombre} y tengo ${persona["edad"]}.`
console.log(descripcion)