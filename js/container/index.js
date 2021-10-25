import { carusel } from '../componets/carrusel.js'
import { tarjeta } from '../componets/Tarjeta.js'
import { GetAllFilms , GetFuncionesDia } from '../services/ServicePelicula.js'
// import  {AllFilms}  from '../services/ServicePelicula.js'
const renderCarrusel = (json)=>{
    const _carrusel = document.getElementById('carrusel-pelis')
    _carrusel.innerHTML+=carusel(json.poster);
}
const renderTarjeta = (json)=>{
    const _tarjeta = document.getElementById('tarjetas')
    
    _tarjeta.innerHTML+=tarjeta(json.poster,json.peliculaNombre,json.sinopsis,json.funcionId,json.horario,json.funcionId);
}
const  chargeInitCarrusel= async ()=>{
      const films =  await GetAllFilms();
        // const data = JSON.stringify(films);
              $.each(films,function(i,item){
         renderCarrusel(item) 
        
        
      });

}
const chargeInitTarjeta= async()=>{
    const parameters ={
        Titulo :"",
        Fecha:"",

    }
    const films =  await GetFuncionesDia(parameters);       
              $.each(films,function(i,item){
                
        $.each(item,function(i ,funcion){
            
            renderTarjeta(funcion)
        })
      });
}
//  js de boton buscador---------------------
var imput = document.getElementById("Buscador")
document.getElementById('BuscarBotton').onclick  = async  function(e)
{
    e.preventDefault();
    const parameters ={
        Titulo :imput.value,
        Fecha:"",

    }
   
    const funcion = await GetFuncionesDia(parameters);
    
    const _tarjeta = document.getElementById('tarjetas')
    _tarjeta.innerHTML=``
    $.each(funcion,function(i,item){
                
        $.each(item,function(i ,funcion){
            renderTarjeta(funcion)
        })
      });

};

export const indexRender=()=>{
    
    chargeInitCarrusel();
    chargeInitTarjeta();

   
}