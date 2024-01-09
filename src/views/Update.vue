<template>
  <div>
    <Header />
    <h1>Update</h1>
    <form class="add">
  <input type="text" name="name" placeholder="Enter name" v-model="Gallery.name"/>
  <input type="text" name="address" placeholder="Enter address" v-model="Gallery.address"/>
  <input type="text" name="contact" placeholder="Enter contact" v-model="Gallery.contact"/>
  <button type="button" v-on:click="addGallery">Update Gallery</button>
 </form>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: 'Update',
  components: {
    Header
  },
  data()
    {
      return{
        Gallery :{
          name:'',
          address:'',
          contact:''
        }
      }
    },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
  }
};
</script>



