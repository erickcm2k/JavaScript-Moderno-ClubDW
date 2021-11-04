const intentarCrearArchivo = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const seCreoElArchivo = Boolean(Math.round(Math.random()));
      if (seCreoElArchivo) {
        console.log("se resolvió");
        resolve(`El archivo ${nombre}.txt se ha creado correctamente.`);
      } else {
        console.log("No se resolvió");
        reject(`Error al crear el archivo`);
      }
    }, 1000);
  });
};

const promesas = [
  intentarCrearArchivo("miArchivo1"),
  intentarCrearArchivo("miArchivo2"),
  intentarCrearArchivo("miArchivo3"),
];

// Promise.all(promesas)
//   .then(() => {
//     console.log("se resolvieron todas las promesas");
//   })
//   .catch(() => {
//     console.log("no se resolvieron todas las promesas");
//   });

Promise.any(promesas)
  .then(() => {
    console.log("Se resolvió al menos una promesa.");
  })
  .catch(() => {
    console.log("No se resolvió ninguna promesa.");
  })
  .finally(() => {
    console.log(`Se intentaron resolver ${promesas.length} promesas.`);
  });

// Promise.race(promesas)
//   .then(() => {
//     console.log("Se resolvió al menos una promesa.");
//   })
//   .catch(() => {
//     console.log("No se resolvió ninguna promesa.");
//   })
//   .finally(() => {
//     console.log(`Se intentaron resolver ${promesas.length} promesas.`);
//   });

// Promise.allSettled(promesas).then((arregloPromesas) => {
//   arregloPromesas.forEach((p) => {
//     console.log(p.status);
//   });
// });
