import { Funcion } from "../componets/funcion.js";
import { GetFuntion } from "../services/ServiceFunciones.js";

const renderFuntion = (json)=>{
    const contenedorFunt = document.getElementById('Contenedor-Funcion')
    contenedorFunt.innerHTML=``;
    contenedorFunt.innerHTML+=Funcion(json.poster,json.peliculaNombre,json.sinopsis,json.horario,json.video,json.salaId);
}

const ChargueFuntion = async()=>{
    var funcion = localStorage.getItem("IdFuncion")
    const funtion =await GetFuntion(Number(funcion))
    console.log(funtion[0])
    // $.each(funcion,function(i,item){
    //       renderFuntion(item)      
    //   });
    renderFuntion(funtion[0])
}
 function Geticket() {
    var nombre  = document.getElementById("ImputNombre").value;
    var cantidadTikects = document.getElementById("ImputCantidad").value;
    alert(nombre + cantidadTikects);
 }  
 export default Geticket    
export const indexPubRender=(e)=>{
    
    Geticket();
    ChargueFuntion();
}

