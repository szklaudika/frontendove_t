<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/aboutme">About</router-link>
    <router-link to="/cart">Cart <span v-if="cartCount">({{ cartCount }})</span></router-link>
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      cartCount: 0,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'Login' });
    },
    updateCartCount() {
      
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      this.cartCount = cartItems.length;
    },
  },
  mounted() {
   
    this.updateCartCount();

    
    window.addEventListener('storage', this.updateCartCount);
  },
  beforeUnmount() {
    
    window.removeEventListener('storage', this.updateCartCount);
  },
};
</script>

<style>
.nav {
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  position: fixed;
  width: 100vw;
  top: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav a {
  padding: 20px 50px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 20px;
}

.nav a:hover {
  background: linear-gradient();
}

.nav span {
  font-size: 14px;
  margin-left: 5px;
}
</style>


  
  
  
