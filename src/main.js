import { createApp } from 'vue'
import App from "@/App";
import {createRouter, createWebHistory} from 'vue-router'
import routes from '@/assets/js/routes';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "@/assets/scss/main.scss"
import FontAwesomeIcon from "@/assets/js/fontawesome-icons";

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
