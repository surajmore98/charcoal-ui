const menuNavButton  = document.querySelector("#menu-btn");
const barMenu = document.querySelector(".nav-menu");


menuNavButton.addEventListener("click", () =>{
    if(barMenu) {
        barMenu.classList.toggle("nav-menu-show");
    }
});

window.addEventListener('resize', function(event){
    if(barMenu) {
        barMenu.classList.remove("nav-menu-show");
    }
});