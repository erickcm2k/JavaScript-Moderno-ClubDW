const intentarCrearArchivo = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const seCreoElArchivo = Boolean(Math.round(Math.random()));
      if (seCreoElArchivo) {
        console.log("funciona");
        resolve(`El archivo ${nombre}.txt se ha creado correctamente.`);
      } else {
        console.log("no funciona");
        reject(`Error al crear el archivo`);
      }
    }, 1000);
  });
};

intentarCrearArchivo("documento-de-prueba")
  .then((res) => {
    return res;
  })
  .catch((err) => {
    return err;
  });
