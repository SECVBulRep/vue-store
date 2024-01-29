import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import components from './components/ui/index.js'
import directives from './directives/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

components.forEach((component) => {
  app.component(component.name, component)
})

directives.forEach((directive) => {
  app.directive(directive.name, directive)
})

app.mount('#app')
