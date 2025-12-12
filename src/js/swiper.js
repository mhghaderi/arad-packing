var swiper = new swiper(".main-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 5000,
  },
});

var swiper = new swiper(".cat-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 15,
    },
  },
});

var swiper = new swiper(".about-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});

var swiper = new Swiper(".pr-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 5000,
  },
});

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  cursorChar: "",
  loop: true,
  backDelay: 1000,
  startDelay: 500,
  typeSpeed: 100,
});
