import { createApp } from 'vue'
import App from "@/App";
import VueAxios from "vue-axios";
import axios from "@/assets/js/axios";
import router from "@/assets/js/router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "@/assets/scss/main.scss";
import FontAwesomeIcon from "@/assets/js/fontawesome-icons";

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app');
