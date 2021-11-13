// Una promesa es un contenedor para un valor futuro (algo que no tenemos aún)

// Estados de una promesa

// Pending - en espera de resolverse
// Fullfilled - resuelve exitosamente
// Rejected - no se resuelve
// Settled - terminada (independientemente de si se resolvió o no)

const num = prompt("Ingresa el número:");
console.log(num);

// function getData() {
//   console.log("Haciendo una request al servidor.");
//   fetch(API_URL)
//     .then((response) => {
//       console.log(response);
//       return response.json().then((data) => {
//         console.log(
//           "Se recibieron los datos se manera correcta. Mostrando al usuario"
//         );
//         console.log(data);
//       });
//     })
//     .catch((err) => {
//       console.log("Hubo un error. No se recibieron los datos");
//       console.error(err);
//     })
//     .finally(() => {
//       console.log("Recibimos un response por parte del servidor.");
//     });
// }

// function getData(num) {
//   const API_URL = `https://jsonplaceholder.typicode.com/todos/${num}`;

//   console.log("Haciendo una request al servidor.");
//   fetch(API_URL)
//     .then((response) => {
//       console.log(response);
//       return response.json().then((data) => {
//         console.log(
//           "Se recibieron los datos se manera correcta. Mostrando al usuario"
//         );
//         console.log(data);
//       });
//     })
//     .catch((err) => {
//       console.log("Hubo un error. No se recibieron los datos");
//       console.error(err);
//     })
//     .finally(() => {
//       console.log("Recibimos un response por parte del servidor.");
//     });
// }

function getData(num) {
    const URL = `https://jsonplaceholder.typicode.com/posts/${num}`;
    fetch(URL)
      .then((response) => response.json()) // Convertir a json también es una promesa.
      .then((data) => {
        console.log(data);
        return fetch(`https://jsonplaceholder.typicode.com/posts/${num}/comments`)
          .then((response) => response.json())
          .then((data) => console.log(data));
      })
      .catch((err) => alert(err))
      .finally(() => console.log("Solicitud finalizada."));
  }

getData(num);
