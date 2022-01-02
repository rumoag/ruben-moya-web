import * as Vue from "../../vendors/vue.esm-browser.prod.js";
import { observer } from "../mixins/_observer.js";
export const ProyectInd = Vue.createApp({
    delimiters: ["[[", "]]"],
    data() {
        return {};
    },
    mounted() {
        observer(".not__visible", 20.0, "visible__now");
        observer(".not__visible--proyect", 20.0, "visible__now");
    },
    methods: {},
    watch: {}
});
export default ProyectInd;
