const miPromesa = new Promise((resolve, reject) => {
  const seResuelve = Boolean(Math.round(Math.random()));

  setTimeout(() => {
    if (seResuelve) {
      resolve("Se cumplió la promesa.");
    } else {
      reject("No se cumplió la promesa");
    }
  }, 2000);
});

miPromesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.log(err);
  });
