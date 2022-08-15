// Предупреждалка
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".overlay_close");
  const overlay = document.querySelector(".overlay");
  
  btn.addEventListener("click", (event) => {
  overlay.remove();
  });
  });

// Слайдер 1
$('.aboutus_inner').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false
});

// Слайдер 2
$(document).ready(function(){
    $('.carousel_inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 1200,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
      ]});
});