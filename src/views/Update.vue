<template>
  
    <Header />
  <div class="content-wrapper">
    <br><br>
    <br><br><br><br>
    <h1>Update</h1>
    <br><br>
    <form class="add">
      <input type="text" name="name" placeholder="Enter name" v-model="Gallery.name" />
      <input type="text" name="address" placeholder="Enter address" v-model="Gallery.address" />
      <input type="text" name="contact" placeholder="Enter contact" v-model="Gallery.contact" />
      <button type="button" @click="updateGallery">Update Gallery</button>
    </form>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import axios from 'axios';

export default {
  name: 'Update',
  components: {
    Header
  },
  data() {
    return {
      Gallery: {
        name: '',
        address: '',
        contact: ''
      }
    };
  },
  methods: {
    async updateGallery() {
      try {
        const result = await axios.put(`http://localhost:3000/gallery/${this.$route.params.id}`, {
          name: this.Gallery.name,
          address: this.Gallery.address,
          contact: this.Gallery.contact
        });

        if (result.status === 200) {
          this.$router.push({ name: 'Home' });
        }
      } catch (error) {
        console.error('Error updating gallery:', error);
      }
    }
  },
  async mounted() {
    try {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({ name: 'SignUp' });
      }

      const result = await axios.get(`http://localhost:3000/gallery/${this.$route.params.id}`);
      this.Gallery = result.data;
    } catch (error) {
      console.error('Error fetching gallery data:', error);
    }
  }
};
</script>






