import { Funcion } from "../componets/funcion.js";
import { GetFuntion } from "../services/ServiceFunciones.js";
import { GetTickets2 } from "../services/ServiceGetTicket.js";
import { GetPeliculaByFuntion } from "../services/ServicePelicula.js";

const renderFuntion = (json)=>{
    const contenedorFunt = document.getElementById('Contenedor-Funcion')
    contenedorFunt.innerHTML=``;
    contenedorFunt.innerHTML+=Funcion(json.poster,json.peliculaNombre,json.sinopsis,json.horario,json.video,json.salaId);
}
const renderTickets = (json)=>{
    console.log(json)
}

export const Geticket=()=>{
    const contenedorTicket= document.getElementById("IdFuncion");
    var tiket={
        "funcionId":parseInt( localStorage.getItem("IdFuncion")),
        "usuario":  document.getElementById("ImputNombre").value ,
        "cantidad": parseInt(document.getElementById("ImputCantidad").value) 
    }
    const funtion = GetTickets2(tiket,renderTickets)


}
export const GetInfoPelicula=()=>{

}
const ChargueFuntion = async()=>{
    var funcion = localStorage.getItem("IdFuncion")
    const funtion =await GetFuntion(Number(funcion))
    // console.log(funtion[0])s
    renderFuntion(funtion[0])
}
const SaveFilmInLocalStorage=async()=>{
    var funcion = localStorage.getItem("IdFuncion")
    var film = await GetPeliculaByFuntion(funcion);
    console.log(film)
    localStorage.setItem("peliculaNombre",film[0].peliculaNombre);
    localStorage.setItem("poster",film[0].poster);
    localStorage.setItem("sinopsis",film[0].sinopsis);
    localStorage.setItem("salaId",film[0].salaId);
    localStorage.setItem("fecha",film[0].fecha);
    localStorage.setItem("horario",film[0].horario);
}

export const indexPubRender=(e)=>{
    ChargueFuntion();
    SaveFilmInLocalStorage();
}

