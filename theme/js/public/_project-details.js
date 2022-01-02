import * as Vue from "../../vendors/vue.esm-browser.prod.js";
import { observer } from "../mixins/_observer.js";
export const ProjectDetails = Vue.createApp({
    delimiters: ["[[", "]]"],
    data() {
        return {
            isTrue: false,
            urlSrc: null,
            isOpen: false,
        };
    },
    mounted() {
        observer(".not__visible", 20.0, "visible__now");
        observer(".not__visible--second", 20.0, "visible__now");
        observer(".not__visible--third", 20.0, "visible__now");
        observer(".not__visible--fourty", 20.0, "visible__now");
    },
    methods: {
        /*zomeando: function (){
          let item = document.querySelector('#project-img');
          new PinchZoom(item, {
            minZoom: 1,
            setOffsetsOnce: true
          });
    
        },*/
        openImage: function () {
            document.querySelector('.zimg__container').classList.remove('container__slim');
            document.querySelector('.project-img').classList.add('project-img-close');
        },
        closeImage: function () {
            document.querySelector('.zimg__container').classList.add('container__slim');
            document.querySelector('.project-img').classList.remove('project-img-close');
        }
    },
    watch: {
        /*isTrue: function () {
          if (this.isTrue === true ){
            console.log('hola')
            this.zomeando();
          }
        },*/
        isOpen: function () {
            if (this.isOpen === true) {
                this.openImage();
            }
            else {
                this.closeImage();
            }
        }
    }
});
export default ProjectDetails;
