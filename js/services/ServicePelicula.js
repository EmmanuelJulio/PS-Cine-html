

export async function GetAllFilms() {
  var arreglo=[];
  const apiurl = "https://localhost:44302/api/pelicula/all";
  const respuesta = await fetch(apiurl)
  .then((response)=>response.json() )
  .then((data)=>{
    arreglo=data.map((element)=>element);
  })
  return arreglo;
}


const apigetFunciones = "https://localhost:44302/api/funcion";
export async function GetFuncionesDia(parametros) {
  
  var elemento = [];
  try {
    await fetch(
      apigetFunciones +`?Titulo=${parametros?.Titulo}&Fecha=${parametros?.Fecha}`
    )
      .then((response) => response.json())
      .then((data) => {
        elemento = data.map((element) => element);
      });

    return elemento;
  } catch (error) {}
}
const apigetPeliculaSegunFuncion =`https://localhost:44302/api/pelicula/funcion/`
export async function GetPeliculaByFuntion(IdFuntion){
  var elemento = [];
  try{
    await fetch(
      apigetPeliculaSegunFuncion+IdFuntion
    ).then((response)=>response.json())
    .then((data)=>{
      elemento=data.map((element)=>element)
    });
    return elemento;
  }catch(error){}
}


// pelicula
// fecha
