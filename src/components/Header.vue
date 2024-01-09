<template>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add</router-link>
      <router-link to="/update">Update</router-link>
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
  }
  
  .nav a {
    padding: 20px 50px; /* Increased padding for more space */
    text-align: center;
    float: left;
    font-size: 17px;
    text-decoration: none;
    margin-right: 20px; /* Increased margin for more space between text */
  }
  
  .nav a:hover {
    background: linear-gradient();
  }
  </style>
  
  
  
