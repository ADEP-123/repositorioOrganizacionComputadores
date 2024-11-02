import openCloseSidebar from "./openCloseSidebar.js";
// Obtén referencias a elementos HTML
const menuButton = document.getElementById("menu_button");
const sidebar = document.getElementById("sidebar");
const info = document.getElementById("info");

menuButton.addEventListener("click", (e) => {
    e.stopPropagation()
    e.preventDefault()
    openCloseSidebar(sidebar, info)
});