import { Geticket,indexPubRender } from "../js/container/indexPub.js";

window.onload=()=>{

     indexPubRender();
     
     var boton = document.getElementById("ComprarTicket");
     boton.onclick=Geticket;

}

