const url =
  "https://rickandmortyapi.com/api/character";

const headers = {
  apikey: "secret_key",
  "Content-Type": "application/json",
};

async function obtenerPersonajes() {
  try {

    console.log("Consultando API...");

    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    console.log("Respuesta de la API:");
    console.log(data);

    console.table(data);

  } catch (error) {

    console.log("Error:");
    console.log(error);

  }
}

obtenerPersonajes();