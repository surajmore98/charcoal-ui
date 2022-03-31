var menuBtn = document.querySelector("#ham");
var menuBar = document.querySelector(".nav-menu");


window.addEventListener('resize', () => menuBar.classList.remove("nav-menu-show"));
menuBtn.addEventListener("click", () => menuBar.classList.toggle("nav-menu-show"));