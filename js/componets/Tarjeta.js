export const tarjeta=(poster,titulo,sinopsis,peliculaId,horario,funcionId)=>`
<div class="card" id="target" style="width: 18rem;">
<img src="${poster}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${titulo}</h5>
  <p class="card-text">${sinopsis}</p>
  <p>Horario = ${horario}<p>
  <a href="http://127.0.0.1:5500/view/Publicacion.html" onclick="GuardarIdFuntionLocalStorage(${funcionId})" class="btn btn-primary">Comprar Ticket!</a>
</div>
</div>
`