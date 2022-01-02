import Header from "./header.js";
import Home from "./public/home.js";
import Proyect from "./public/proyect.js";
import Info from "./public/info.js";
import ProyectInd from "./public/proyectInd.js";
import Article from "./public/article.js";
if (document.querySelector("#header")) {
    Header.mount("#header");
}
if (document.querySelector("#home")) {
    Home.mount("#home");
}
if (document.querySelector("#proyect")) {
    Proyect.mount("#proyect");
}
if (document.querySelector("#info")) {
    Info.mount("#info");
}
if (document.querySelector("#proyectInd")) {
    ProyectInd.mount("#proyectInd");
}
if (document.querySelector("#article")) {
    Article.mount("#article");
}
