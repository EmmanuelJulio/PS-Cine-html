const apiurl = "https://localhost:44302/api/funcion/id?id=";

export async function GetFuntion(id) {
   var elemento = [];

  await fetch(apiurl+`${id}`)
    .then((response) => response.json())
    .then((data) => {
     elemento = data.map((element) => element);
    });
    return elemento;

}

const urlPorFecha  =`https://localhost:44302/api/funcion?Fecha=`
export async function GetFuncionesPorFecha(parameters){
  var elemento=[];
  
  await fetch(urlPorFecha+parameters.Fecha)
  .then((response)=>response.json())
  .then((data)=>{
    elemento=data.map((element)=>element);
  });
  return elemento;
}