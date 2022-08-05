const buttonHamburger = document.querySelector(".btn-hamburger");
const navResponsiv = document.querySelector(".list-header");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const header = document.querySelector("header");

// Evenement au click sur le button burger
buttonHamburger.addEventListener("click", () => {
    const imgButton = document.querySelector(".btn-hamburger").src;

    if (imgButton.indexOf("icon-hamburger") != -1) {
        buttonHamburger.src = "./images/icon-close.svg";
        navResponsiv.classList.add("active-nav");
        overlay.style.display = "block";
        body.classList.add("active-body");
    } else {
        buttonHamburger.src = "./images/icon-hamburger.svg";
        navResponsiv.classList.remove("active-nav");
        overlay.style.display = "none";
        body.classList.remove("active-body");
    }
});

// supprimer overlay des 992px
window.addEventListener("resize", (e) => {
    if (window.innerWidth >= 992) {
        buttonHamburger.src = "./images/icon-hamburger.svg";
        navResponsiv.classList.remove("active-nav");
        overlay.style.display = "none";
        body.classList.remove("active-body");
    }
});

// ajout background à la nav au scroll
window.addEventListener("scroll", () => {
    if ( scrollY > 50) {
        header.classList.add("active-scrollY");
    } else {
        header.classList.remove("active-scrollY");
    }
});



//  ajout du slider avec swiper.js

const swiper = new Swiper('.mySwiper', {
     
    centeredSlides: true,
    grabCursor:true,
    spaceBetween: 20,

    breakpoints:{
      0: {
        slidesPerView:1,
      },
      580: {
        slidesPerView:2,
        spaceBetween: 0,
      },
      920: {
        slidesPerView:3,
        spaceBetween: 0,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    loop:true,
  });

  let appendNumber = 4;
  let prependNumber = 1;
  document
    .querySelector('.prepend-2-slides')
    .addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      ]);
    });
  document
    .querySelector('.prepend-slide')
    .addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
      );
    });
  document
    .querySelector('.append-slide')
    .addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
      );
    });
  document
    .querySelector('.append-2-slides')
    .addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      ]);
    });


