var swiper= new Swiper(".slider", {
   effect: "fade",
   loop: true,
   pagination: {
      el: ".swiper-pagination"
   },
   autoplay: {
      delay: 1500,
   },
})
var swiperComents= new Swiper("#coments", {
   spaceBetween: 20,
   navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
   },
   breakpoints: {
      768: {
         slidesPerView: 2,
      },
   },
   pagination: {
      el: ".swiper-pagination"
   },
})