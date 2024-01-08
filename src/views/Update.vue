<template>
  <div>
    <Header />
    <h1>Update</h1>
    <!-- Your Update component content goes here -->
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: 'Update',
  components: {
    Header
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
  }
};
</script>



