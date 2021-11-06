import { TarjetaTicket } from "../componets/TarjetaTicket.js";

const UrlGetTicket = `https://localhost:44302/api/tickets`;
export function GetTickets2(tiket,callback){
  fetch(UrlGetTicket, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ funcionId: tiket.funcionId, usuario: tiket.usuario, cantidad:tiket.cantidad})
})
.then((httpresponse)=>{
  if(httpresponse.ok){
    return httpresponse.json();
  }
})
.then(body=> {
    console.log(body);
      callback(body)
});
}
