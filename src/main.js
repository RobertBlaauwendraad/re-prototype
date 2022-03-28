import { createApp } from 'vue'
import App from "@/App";
import {createRouter, createWebHistory} from 'vue-router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@/assets/scss/main.scss"

import routes from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
