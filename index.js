const barritas = document.querySelector(".barritas")
const navMenu = document.querySelector(".nav-menu")

/*SE USA PARA QUE AL DAR CLICK EN LAS BARRITAS SE HAGA VISIBLE EL NUEVO MENU DEL NAV*/
barritas.addEventListener("click", ()=>{
navMenu.classList.toggle("nav-menu-visible");})
