import {createWebHistory, createRouter} from 'vue-router'
import HomePageComponent from "@/views/HomePageView.vue";
import LoginPageView from "@/views/LoginPageView.vue";

const routes = [
  {
    path: '/',
    name: 'HomePageComponent',
    component: HomePageComponent

  },
  {
    path: '/login',
    name: 'LoginPageView',
    component: LoginPageView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
