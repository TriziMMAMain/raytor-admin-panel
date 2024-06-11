import {createMemoryHistory, createRouter} from 'vue-router'
import HomePageComponent from "@/components/AddProductComponent.vue";

const routes = [
  {
    path: '/',
    component: HomePageComponent
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
