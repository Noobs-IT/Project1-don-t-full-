const swiper = new Swiper('.swiper');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

btn1.addEventListener('click', (e) => {
    e.preventDefault();
    swiper.slideTo( 0, 310);
});
btn2.addEventListener('click', (e) => {
    e.preventDefault();
    swiper.slideTo( 1, 210, false);
});
btn3.addEventListener('click', (e) => {
    e.preventDefault();
    swiper.slideTo(2, 210);
});
btn4.addEventListener('click', (e) => {
    e.preventDefault();
    swiper.slideTo(3, 210);
});

let swiper1 = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
let closeBtn = document.querySelector(".close-btn");
let btn_mod = document.querySelector('#modal');
let btn_mod1 = document.querySelector('#modal1');
let btn_mod2 = document.querySelector('#modal2');
let btn_mod3 = document.querySelector('#modal3');
let btn_mod4 = document.querySelector('#modal4');
let $modal = document.querySelector('.modal');

btn_mod.addEventListener('click', (e)=>{
  e.preventDefault()
  $modal.classList.add('open-modal');
})
btn_mod1.addEventListener('click', (e)=>{
  e.preventDefault()
  $modal.classList.add('open-modal');
})
btn_mod2.addEventListener('click', (e)=>{
  e.preventDefault()
  $modal.classList.add('open-modal');
})
btn_mod3.addEventListener('click', (e)=>{
  e.preventDefault()
  $modal.classList.add('open-modal');
})
btn_mod4.addEventListener('click', (e)=>{
  e.preventDefault()
  $modal.classList.add('open-modal');
})
closeBtn.addEventListener('click', (f)=>{
  $modal.classList.remove('open-modal')
})
// var swiper3 = new Swiper(".mySwiper", {
//     navigation:{
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     grabCursor: true,
//     effect: "creative",
//     creativeEffect: {
//       next: {
//         translate: ['100%', 1, 1],
//       },
//       prev: {
//         translate: ['', 1, -1],
//       },
//     },
//     loop: true,
//     mousewheel: false,
//   });





// var swiper1 = new Swiper(".mySwiper");
// var swiper2 = new Swiper(".mySwiper", {
//     grabCursor: true,
//     effect: "creative",
//     creativeEffect: {
//       prev: {
//         shadow: false,
//         translate: [0, 0, -500],
//       },
//       next: {
//         shadow: false,
//         translate: [0, 0, -500],
//       },
//     },
//     centeredSlides: true,
//   });
// var swiper1 = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: false,
//   });
// const swiper1 = new Swiper('.mySwiper', {
//     effect: 'cards',
//     cardsEffect: {
//       rotate: false,
//       perSlideOffset: 8,
//       perSlideRotate: 0,
//       slideShadows: false,
//     },
//   });
