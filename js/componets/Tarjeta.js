export const tarjeta=(poster,titulo,sinopsis,peliculaId)=>`
<div class="card" id="target" style="width: 18rem;">
<img src="${poster}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${titulo}</h5>
  <p class="card-text">${sinopsis}</p>
  <a href="${peliculaId}" onClick= class="btn btn-primary">Comprar Ticket!</a>
</div>
</div>
`