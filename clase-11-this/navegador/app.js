//"use strict";
/**
 *
 * "this" en el contexto de un objeto
 * Está ligado al objeto mismo
 *
 */

const persona = {
  nombre: "Jorge",
  edad: 35,
  saludar: function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  },
};

persona.saludar();

// Esto no siempre se cumple...

const mascota = {
  nombre: "Doug",
  especie: "Perro",
  raza: "Golder Retriever",
};

function retornarNombre() {
  console.log(this);
}

//retornarNombre();

mascota["fn"] = retornarNombre;
mascota.fn();

/**
 *
 *
 */
