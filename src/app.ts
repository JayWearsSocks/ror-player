import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "./app.scss";
import Main from './ui/main/main';
import "@fortawesome/fontawesome-free/scss/fontawesome.scss"
import "@fortawesome/fontawesome-free/scss/solid.scss"

Vue.use(BootstrapVue);

new Vue({
	el: "#loading",
	render: (createElement) => createElement(Main)
});
