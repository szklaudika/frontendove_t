<template>
  <Header />
  <br><br><br><br>
  <div class="content-wrapper">
    <h1>Add</h1>
    <br><br>
    <form class="add" @submit.prevent="addGallery">
      <input type="text" name="name" placeholder="Enter name" v-model="Gallery.name"/>
      <input type="text" name="address" placeholder="Enter address" v-model="Gallery.address"/>
      <input type="text" name="contact" placeholder="Enter contact" v-model="Gallery.contact"/>
      <input type="file" name="image" accept="image/*" @change="handleImageUpload">
      <button type="submit">Add new Gallery</button>
    </form>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import axios from 'axios'

export default {
  name: 'Add',
  components: {
    Header
  },
  data() {
    return {
      Gallery: {
        name: '',
        address: '',
        contact: '',
        image: null 
      }
    }
  },
  methods: {
    async addGallery() {
      const formData = new FormData();
      formData.append('name', this.Gallery.name);
      formData.append('address', this.Gallery.address);
      formData.append('contact', this.Gallery.contact);
      formData.append('image', this.Gallery.image); 

      try {
        const result = await axios.post("http://localhost:3000/gallery", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (result.status === 201) {
          this.$router.push({ name: 'Home' });
        }
      } catch (error) {
        console.error('Error adding gallery:', error);
      }
    },
    handleImageUpload(event) {
      
      this.Gallery.image = event.target.files[0];
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
  }
}
</script>



