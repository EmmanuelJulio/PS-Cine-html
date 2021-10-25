import { indexRender } from '../js/container/index.js'


window.onload=()=>{

  indexRender();
  

// slick confuguracion------------------------------------------------------------------------------------
$(function(){
	$('.center').slick({
		infinite:true,
		slidesToShow: 5,
    slidesToScroll: 1,
		arrows:false,
		autoplay: true,
		autoplaySpeed: 1000,
		dots: false,
		centerModel:true,
        centerPadding:'80px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
	});
});

}
