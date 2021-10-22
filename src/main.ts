import { createApp } from 'vue'
import App from '@/views/App/App.vue'
import router from '@/router'
import store from '@/store'
import "bootstrap"

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')


