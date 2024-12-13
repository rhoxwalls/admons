import { carousel } from "./functions/carousel.js";
import {contadorPlatos, FechaActual, platillos, sendForm } from "./functions/functionsForm.js";
import {toogleMenu} from "./functions/toogleMenu.js";

document.addEventListener("DOMContentLoaded",()=>{
    toogleMenu(".button-nav",".nav");
    carousel("#carousel-tragos .carousel-track", "#next-tragos", "#prev-tragos");
    carousel("#carousel-exibidoras .carousel-track", "#next-exibidoras", "#prev-exibidoras");
    carousel("#carousel-licores .carousel-track", "#next-licores", "#prev-licores");
    FechaActual();
    platillos("#entrada-container","#principal-container","#postres-container");
    contadorPlatos(".counter .contador-entrada ",".sumar-entrada",".restar-entrada");
    contadorPlatos(".counter .contador-principal ",".sumar-principal",".restar-principal");
    contadorPlatos(".counter .contador-postres",".sumar-postres",".restar-postres");
    sendForm();
});


