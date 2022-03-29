import { createApp } from 'vue'
import App from "@/App";
import router from "@/assets/js/router.js"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "@/assets/scss/main.scss"
import FontAwesomeIcon from "@/assets/js/fontawesome-icons";

const app = createApp(App)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
