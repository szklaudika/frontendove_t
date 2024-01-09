import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Add from '../views/Add.vue'
import Update from '../views/Update.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      name:'SignUp',
      component: SignUp,
      path: '/sign-up',
    },
    {
      name:'Login',
      component: Login,
      path: '/login',
    },
    {
      name:'Add',
      component: Add,
      path: '/add',
    },
    {
      name:'Update',
      component: Update,
      path: '/update/:id',
    },
  ]
})

export default router
