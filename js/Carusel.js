const carrusel =document.getElementById("carrusel-pelis");
 function CargarpeliculasSlick (){
  let res=  fetch(apiurl).then((resolve)=>{
      return resolve.json();
      
  }).then((s)=>{
      
     s.forEach(element => {
         carrusel.innerHTML+=
          `<div class="wrapper">
          <div class="container">
              <img class="top" src="${element.poster}" alt="">
          </div>  
         </div>`
       
     });
     console.log(s)
  })
}
export default function CargarpeliculasSlick()