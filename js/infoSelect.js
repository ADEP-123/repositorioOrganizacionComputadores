import infoHome from "./components/info.js";
import openCloseSidebar from "./openCloseSidebar.js";

document.addEventListener("DOMContentLoaded", function () {
    const info = document.getElementById("info")
    info.innerHTML = infoHome
    const homebutton = document.getElementById("home_button_link")
    const sidebarButtons = document.querySelectorAll("#sidebar button");
    const sidebar = document.getElementById("sidebar");

    sidebarButtons.forEach((button) => {

        button.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const moduleName = `${button.value}`;

            import(`./components/${moduleName}.js`)
                .then((modul) => {
                    info.innerHTML = modul.default;
                    Prism.highlightAll();

                    const ejText = document.querySelector("#enunciado");
                    if (ejText) {
                        ejText.style.textAlign = "justify";
                    }
                    openCloseSidebar(sidebar, info)
                    const moduleNames = ["amdvsintel", "graf4k", "riscycisc", "evolucionram"]
                    if (moduleNames.includes(moduleName)) {
                        const slideButtons = document.querySelectorAll(".slideButton")
                        const actualImage = document.querySelector(".slideImage")
                        const slideCounter = document.querySelector("#slideCounter")
                        let actualSlide = 1
                        let maxSlide = 0
                        switch (moduleName) {
                            case "amdvsintel":
                                maxSlide = 9
                                break;

                            case "graf4k":
                                maxSlide = 9
                                break;

                            case "riscycisc":
                                maxSlide = 10
                                break;

                            case "evolucionram":
                                maxSlide = 8
                                break;

                            default:
                                maxSlide = 1
                                break;
                        }
                        slideCounter.innerHTML = `1/${maxSlide}`

                        slideButtons[1].addEventListener("click", (e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            if (actualSlide < maxSlide) {
                                actualSlide += 1
                                actualImage.classList.add("fade-out");
                                setTimeout(() => {
                                    actualImage.src = `imgs/slides/${moduleName}/Página_${actualSlide}.jpg`
                                    slideCounter.innerHTML = `${actualSlide}/${maxSlide}`
                                    actualImage.classList.remove("fade-out")
                                }, 500)
                            }
                        })

                        slideButtons[0].addEventListener("click", (e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            if (actualSlide > 1) {
                                actualSlide -= 1
                                actualImage.classList.add("fade-out");
                                setTimeout(() => {
                                    actualImage.src = `imgs/slides/${moduleName}/Página_${actualSlide}.jpg`
                                    slideCounter.innerHTML = `${actualSlide}/${maxSlide}`
                                    actualImage.classList.remove("fade-out")
                                }, 490)
                            }
                        })
                    }
                })
                .catch((error) => {
                    console.error({ error });
                    info.innerHTML = /*html*/`
                    <h1>Estamos trabajando en esta seccion</h1>
                    <img src="imgs/roborError.gif"></img>
                    `;
                });

        });
    });

    homebutton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        info.innerHTML = infoHome
    })

});