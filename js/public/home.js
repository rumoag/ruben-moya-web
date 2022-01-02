import * as Vue from "../../vendors/vue.esm-browser.prod.js";
import { observer } from "../mixins/_observer.js";
export const Home = Vue.createApp({
    delimiters: ["[[", "]]"],
    data() {
        return {
            cinco: 0,
            diez: 0,
            icinco: 1,
            idiez: 10
        };
    },
    mounted() {
        observer(".not__visible", 20.0, "visible__now");
        observer(".not__visible--proyect", 20.0, "visible__now");
        this.observerVisibleCinco();
        this.observerVisibleDiez();
        this.scrollTop();
    },
    methods: {
        scrollTop: function () {
            document.addEventListener('scroll', function (evento) {
                let positionScroll;
                positionScroll = window.scrollY;
                if (positionScroll >= 100) {
                    document.querySelector('.header__logo--img').classList.add('header__logo--notrans');
                }
                else {
                    document.querySelector('.header__logo--img').classList.remove('header__logo--notrans');
                }
            });
        },
        observerVisibleCinco: function () {
            let boxElement = document.querySelector('.hpresentation__numCinco');
            let observer;
            let options = {
                root: null,
                rootMargin: "0px",
                threshold: 1.0
            };
            observer = new IntersectionObserver(this.intesectionCinco, options);
            observer.observe(boxElement);
        },
        intesectionCinco: function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.contadorCinco(0);
                }
                else {
                    this.cinco = 0;
                }
            });
        },
        contadorCinco: function (x) {
            if (x <= 5) {
                this.cinco = x;
                setTimeout(() => this.contadorCinco(x + 1), 100);
            }
        },
        observerVisibleDiez: function () {
            let boxElement = document.querySelector('.hpresentation__numDiez');
            let observer;
            let options = {
                root: null,
                rootMargin: "0px",
                threshold: 1.0
            };
            observer = new IntersectionObserver(this.intesectionDiez, options);
            observer.observe(boxElement);
        },
        intesectionDiez: function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.contadorDiez(0);
                }
                else {
                    this.diez = 0;
                }
            });
        },
        contadorDiez: function (x) {
            if (x <= 10) {
                this.diez = x;
                setTimeout(() => this.contadorDiez(x + 1), 100);
            }
        },
    },
    watch: {}
});
export default Home;
