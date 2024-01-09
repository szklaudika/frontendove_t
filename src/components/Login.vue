<template>
  <br><br><br><br><br><br>
   <div class="content-wrapper">
    <h1>Login</h1>
    <br><br>
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button v-on:click="login">Login</button>
      <div class="content-wrapper"><p>
        <router-link to="/sign-up">Sign Up</router-link>
      </p> </div>
    </div>
   </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        const result = await axios.get(
  `http://localhost:3000/users?email=${this.email}&password=${this.password}`);

          if (result.status === 200 && result.data.length > 0) {
            localStorage.setItem('user-info', JSON.stringify(result.data[0]));
            this.$router.push({ name: 'Home' });
          } else {
            console.warn('Login failed. User not found.');
          }
        
          console.error('An error occurred during login:', error);
        }
      },
      mounted()
        {
            let user= localStorage.getItem('user-info');
            if(user)
            {
                this.$router.push({ name: 'Home' })
            }
        }
    };
  </script>
  