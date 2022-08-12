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

var swiper = new Swiper(".mySwiper", {
     
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 100,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true,
    grabCursor:true,
  });
    

    // breakpoints:{
    //   0: {
    //     slidesPerView:1,
    //   },
    //   580: {
    //     slidesPerView:2,
    //     spaceBetween: 0,
    //   },
    //   920: {
    //     slidesPerView:3,
    //     spaceBetween: 0,
    //   },
    // },
    
  



