const navmenu = document.querySelector("#nav_menu");
const menu = document.querySelector(".hamburger");

menu.addEventListener("click", ()=>{
    menu.classList.toggle("open");
    navmenu.classList.toggle("show");
});

// var swiper = new Swiper(".slider", {
//     grabCursor: true,
//     effect: "creative",
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//     creativeEffect: {
//       prev: {
//         shadow: false,
//         translate: [-1000, 0, 0],
//       },
//       next: {
//         translate: ["100%", 0, 0],
//       },
//     },
//   });