import Header from "./_header.js";
import Home from "./public/_home.js";
import Proyect from "./public/_proyect.js";
import Info from "./public/_info.js";
import ProyectInd from "./public/_proyectInd.js";
import Article from "./public/_article.js";
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
