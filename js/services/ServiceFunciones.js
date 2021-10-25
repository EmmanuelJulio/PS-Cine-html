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