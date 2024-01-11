import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../components/SignUp.vue';
import Login from '../components/Login.vue';
import Add from '../views/Add.vue';
import Update from '../views/Update.vue';
import About from '../views/About.vue'; 
import Cart from '../views/Cart.vue';
import AboutMe from '../views/AboutMe.vue'; 
import Checkout from '../views/Checkout.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      name: 'SignUp',
      component: SignUp,
      path: '/sign-up',
    },
    {
      name: 'Login',
      component: Login,
      path: '/login',
    },
    {
      name: 'Add',
      component: Add,
      path: '/add',
    },
    {
      name: 'Update',
      component: Update,
      path: '/update/:id',
    },
    {
      path: '/about/:id',
      name: 'About',
      component: About,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe, 
    },
    {
      path: '/checkout', 
      name: 'Checkout',
      component: Checkout, 
    },
  ],
});

export default router;



