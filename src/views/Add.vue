<template>
  <Header />
 <h1>Add</h1>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    name: 'Add',
    components:{
      Header
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    }
}

</script>


