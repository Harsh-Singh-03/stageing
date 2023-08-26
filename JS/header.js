const popUp = document.getElementById("pop-up-toggle")
const navItem = document.querySelectorAll(".nav-item")
const togglePopUp = () =>{
    popUp.classList.toggle("pop-up-toggle-active")
    console.log("he")
}
if(window.location.pathname === "/"){
    navItem[0].classList.add("nav-item-active")
}
if(window.location.pathname === "/index.html"){
    navItem[0].classList.add("nav-item-active")
}
if(window.location.pathname === "/about.html"){
    navItem[1].classList.add("nav-item-active")
}
if(window.location.pathname === "/banta-jeera.html"){
    navItem[2].classList.add("nav-item-active")
}
if(window.location.pathname === "/product.html"){
    navItem[3].classList.add("nav-item-active")
}
if(window.location.pathname === "/contact.html"){
    navItem[5].classList.add("nav-item-active")
}