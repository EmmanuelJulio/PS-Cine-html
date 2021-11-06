export const TarjetaTicket = (poster,titulo,sinopsis,nombre,cantidad,horario)=>
`  <div class="Ticketvista">
<div class="card" style="width: 18rem;">
    <img src="${poster}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 id="titulo" class="card-title">${titulo}</h5>
      <p class="card-text">${sinopsis}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${nombre}</li>
      <li class="list-group-item">Cantidad de tickets ${cantidad}</li>
      <li class="list-group-item">Horario de funcion ${horario}</li>
    </ul>
    
  </div> 
</div> `