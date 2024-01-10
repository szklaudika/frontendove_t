<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/cart">Cart</router-link>

    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style>
.nav {
  overflow: hidden;
  background-color: black;
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
</style>


  
  
  
