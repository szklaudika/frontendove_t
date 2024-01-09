<template>
    <br><br><br><br><br><br><br><br>
    <div class="content-wrapper">
  
    <h1>Sign Up</h1>
    <br><br>
    <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="signUp">Sign Up</button>
</div>
    <div class="content-wrapper"><p>
      <router-link to="/login">Login</router-link>
    </p></div>
  
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async signUp() {
      try {
        const result = await axios.post("http://localhost:3000/users", {
          email: this.email,
          password: this.password,
          name: this.name,
        });

        console.warn(result);

        if (result.status === 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: 'Home' });
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }
    },
  },
  created() {
    let user = localStorage.getItem('user-info');
    if (user) {
      this.$router.push({ name: 'Home' });
    }
  },
};
</script>

<style>
.register.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
