export const Funcion = (
  poster,
  titulo,
  sinopsis,
  horario,
  urlVideo,
  sala
) => `
                <div id="Publicacion">
                    <div class="row rounded">
                        <div class=" col-3 Pelicula-container">
                            <div class="container-imagen text-center">
                                <img id="ImagenPoster" src="${poster}" class="img-thumbnail"
                                    alt="">
                            </div>
    
    
                        </div>
                        <div class="col-9 Pelicula-video text-left sl-3">
                            <div class="container-title">
                                <h1 id="TituloPelicula" class="text-light Text-Titulo">${titulo}</h1>
                            </div>
                            <div class="contaier-descripcion ">
                                <span id="Sinopsis" class="text-light Text">${sinopsis}</span>
                            </div>
                            <div class="text-light mt-3 Text Texto-funcion">
                                <p id="Hora">${horario} Hs</p>
                            </div>
                             <div class="text-light mt-3 Horario Text">
                                <p id="Hora">Sala : ${sala}</p>
                            </div>
                        </div>
    
                </div>
                <div class="row">
                        <div class=" col-12 color-texto-trailer">
                            <h2 class="text-light mt-2  ">Trailer</h2>
                            <hr>
                            <div class="Pelicula-video center-video">
                                <iframe src="${urlVideo}" title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

`;
