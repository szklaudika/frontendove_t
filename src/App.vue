<script setup>
import { RouterLink, RouterView } from 'vue-router';

const name = 'Header';

const logout = () => {
  localStorage.clear();
  this.$router.push({ name: 'Login' });
};
</script>

<template>
  <RouterView />
</template>

<style>


.register input,
.login input,
.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  border: 1px solid royalblue;
}

.register button,
.login button,
.add button {
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
    position: fixed;
    
    top: 0;
    margin: 0; 
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




