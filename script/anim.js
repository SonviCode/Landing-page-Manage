const logo = document.querySelector('.logo-header img');
const navList = document.querySelectorAll('.list-header a');
const buttonHeader = document.querySelector('.button-header button');
const textHome = document.querySelectorAll('.text-home>*');
const imgHome = document.querySelector('.img-home img:nth-child(1)');
const imgDeco = document.querySelector('.bg-deco-home');


// FONCTION D'APPARITION DU HEADER ET DE LA PAGE D'ACCUEIL
window.addEventListener('load', initAnim);

function initAnim(){

    const TLFADE = gsap.timeline();

    TLFADE 
    .to(imgDeco, {autoAlpha: 1, duration:0.8, ease:"sine.out", x: 0, y:0, delay: 0.2})
    .to(textHome, {autoAlpha: 1, ease:"power1", x: 0, delay: 0.5, stagger: 0.4},'-=0.5')
    .to(imgHome, {autoAlpha: 1, x: 0, ease:"power1"}, '-=0.3')
    .to(logo, {autoAlpha: 1, y: 0, delay: 0.4},'-=0.4')
    .to(buttonHeader, {autoAlpha: 1, y: 0, delay: 0.2},'-=0.2')
    .to(navList, {autoAlpha: 1, y: 0, delay: 0.4, stagger: 0.1},'-=0.6')

}

// FONCTION D'APPARITION AU SCROLL
const titleAvantages = document.querySelectorAll('.title-different>*');

gsap.to(titleAvantages, {
    duration: 1,
    y: 0,
    autoAlpha: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: titleAvantages,
        // markers: true,
        start: "top 50%",
        toggleActions: "play none none reverse ",
    }
})

const listAvantages = document.querySelectorAll('.card-avantages>*');

gsap.to(listAvantages, {
    duration: 1,
    y: 0,
    autoAlpha: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: titleAvantages,
        // markers: true,
        start: "top 50%",
        toggleActions: "play none none reverse ",
        onEnter: ()=> {console.log("ok");}
    }
})

const Slid = document.querySelectorAll('.card-slid>*, .card-slid, .notice button');
const h2Slider = document.querySelectorAll('.notice h2');

gsap.to(Slid, {
    duration: 1,
    y: 0,
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: Slid,
        // markers: true,
        start: "top 50%",
        toggleActions: "play none none reverse ",
        onEnter: ()=> {console.log("ok");}
    }
})

gsap.to( h2Slider, {
    duration: 1,
    y: 0,
    autoAlpha: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: h2Slider,
        // markers: true,
        start: "top 50%",
        toggleActions: "play none none reverse ",
        onEnter: ()=> {console.log("ok");}
    }
})




