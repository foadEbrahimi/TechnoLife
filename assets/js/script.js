var swiper = new Swiper('.mySwiper', {
  // spaceBetween: 10,
  loop: true,
  speed: 1500,
  autoplay: true,
});
var swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 100,
  autoplay: true,
  speed: 5000,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    1282: {
      slidesPerView: 7,
      spaceBetween: 40,
    },
  },
});
var swiper = new Swiper('.offer-swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
