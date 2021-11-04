// Estructura de una promesa

const miPromesa = new Promise((resolve, reject) => {
  const seResuelve = Boolean(Math.round(Math.random()));

  if (seResuelve) {
    resolve("Se cumplió la promesa.");
  } else {
    reject("No se cumplió la promesa");
  }
});

miPromesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.log(err);
  });
