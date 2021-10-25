const apiurl = "https://localhost:44302/All";

export async function GetAllFilms() {
  var elemento = [];
  await fetch(apiurl)
    .then((response) => response.json())
    .then((data) => {
      elemento = data.map((element) => element);
    });

  return elemento;
}


const apigetFunciones = "https://localhost:44302/api/funcion";
export async function GetFuncionesDia(parametros) {
  console.log(parametros)
  var elemento = [];
  try {
    await fetch(
      apigetFunciones +
        `?Titulo=${parametros?.Titulo}&Fecha=${parametros?.Fecha}`
    )
      .then((response) => response.json())
      .then((data) => {
        elemento = data.map((element) => element);
      });

    return elemento;
  } catch (error) {}
}

// pelicula
// fecha
