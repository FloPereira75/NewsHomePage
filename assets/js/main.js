const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeBtn = document.querySelector("#close-btn");
const boxMenu = document.querySelector(".nav-menu");
const menu = document.querySelector("#menu");


function showMenu() {
    boxMenu.style.display = "block";
    menu.classList.add("active-menu");
    closeBtn.style.display = "block";
}

hamburgerBtn.addEventListener("click", () => showMenu());

function closeMenu() {
    boxMenu.style.display = "none";
    menu.classList.remove("active-menu");
    closeBtn.style.display = "none";
}

closeBtn.addEventListener("click", () => closeMenu());