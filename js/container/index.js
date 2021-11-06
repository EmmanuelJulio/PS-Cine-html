import { caruselActive } from "../componets/carrusel.js";
import { carruselInactive } from "../componets/CarruselInactivo.js";
import { tarjeta } from "../componets/Tarjeta.js";
import { GetAllFilms, GetFuncionesDia } from "../services/ServicePelicula.js";

const renderCarruselactivo = (json) => {
  const _carrusel = document.getElementById("ContendorCarrusel");
  _carrusel.innerHTML += caruselActive(json.poster);
};
const renderCarruselInactivo = (json) => {
  const _carrusel = document.getElementById("ContendorCarrusel");

  _carrusel.innerHTML += carruselInactive(json.poster);
};

const renderTarjeta = (json) => {
  const _tarjeta = document.getElementById("tarjetas");

  _tarjeta.innerHTML += tarjeta(
    json.poster,
    json.peliculaNombre,
    json.sinopsis,
    json.funcionId,
    json.horario,
    json.funcionId
  );
};

const chargueinitCarrusel = async () => {
  const films = await GetAllFilms();

  var contador = 0;
  for (const pelicula in films) {
    if (contador == 0) {
      renderCarruselactivo(films[pelicula]);
      contador++;
    } else {
      console.log(films[pelicula]);
      renderCarruselInactivo(films[pelicula]);
    }
  }
};

const chargeInitTarjeta = async () => {
  var parameters = {
    Titulo: "",
    Fecha: "",
  };
  const films = await GetFuncionesDia(parameters);

  films[0].forEach((element) => {
    renderTarjeta(element);
  });
};
//  js de boton buscador---------------------
var inputFecha = document.getElementById("BuscadorPorFecha");
var inputTitulo = document.getElementById("TituloABuscar");
document.getElementById("Buscar").onclick = async function (e) {
  const _tarjetas = document.getElementById("tarjetas");
  let parameters = {};
  e.preventDefault();
  if (inputFecha.value != "" && inputTitulo.value == "") {
    parameters = {
      Titulo: "",
      Fecha: inputFecha.value,
    };
    var texto = (document.getElementById(
      "ExtoIndicativo"
    ).innerHTML = `Funciones en el dia ${parameters.Fecha}`);
  }
  if (inputFecha.value == "" && inputTitulo.value != "") {
    parameters = {
      Titulo: inputTitulo.value,
      Fecha: "",
    };
    var texto = (document.getElementById(
      "ExtoIndicativo"
    ).innerHTML = `Busqueda de funciones para el dia de la fecha para ${parameters.Titulo}`);
  }
  if (inputFecha.value != "" && inputTitulo.value != "") {
    parameters = {
      Titulo: inputTitulo.value,
      Fecha: inputFecha.value,
    };
    var texto = (document.getElementById(
      "ExtoIndicativo"
    ).innerHTML = `Busqueda de funciones para ${parameters.Titulo} en el dia ${parameters.Fecha}`);
  }
  const funciones = await GetFuncionesDia(parameters);
  _tarjetas.innerHTML = "";
  funciones[0].forEach((element) => {
    renderTarjeta(element);
  });
};

export const GuardarIdFuntionLocalStorage = (e) => {
  localStorage.setItem("IdFuncion", e);
};

export const indexRender = () => {
  chargeInitTarjeta();
};
