<script setup>
import { RouterLink, RouterView } from 'vue-router';

const name = 'Header';

const methods = {
  logout() {
    localStorage.clear();
    this.$router.push({ name: 'Login' });
  },
};
</script>

<template>
  <header>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add</router-link>
      <router-link to="/update">Update</router-link>
      <a v-on:click="logout" href="#">Logout</a>
    </div>
  </header>

  <RouterView />
</template>

<style>
body {
  padding: 0;
  margin: 0;
}

.register input,
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  border: 1px solid royalblue;
}

.register button,
.login button {
  width: 300px;
  height: 40px;
  border: 1px solid royalblue;
  background: royalblue;
  color: white;
  cursor: pointer;
}

.nav {
  overflow: hidden;
  background-color: black;
}

.nav a {
  padding: 14px 16px;
  text-align: center;
  float: left;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}

.nav a:hover {
  background: linear-gradient();
}
</style>



