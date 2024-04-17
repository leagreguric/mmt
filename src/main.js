import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import router2 from './router/router'

const app = createApp(App)

app.use(router)
app.use(router2)
app.mount('#app')