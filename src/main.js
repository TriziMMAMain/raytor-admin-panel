// Plugins
import {vuetify} from './plugins/vuetify'
import { createPinia } from 'pinia'
import router from './routes'
import Toast from './plugins/toast.js'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.use(createPinia())
app.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 2,
  newestOnTop: true
})
router.afterEach(() => {
  requestAnimationFrame(() => {
    const top = document.getElementById('app').offsetTop;
    window.scrollTo({
      top,
      behavior: 'auto',
      block: 'start',
    });
  });
});
app.use(router)
app.use(vuetify)
app.mount('#app')
