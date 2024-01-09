<template>
  <Header />
  <div class="content-wrapper">
    <br><br><br><br><br><br>
    <h1>Hello {{ name }}, Welcome on Home Page</h1>
    <br><br>
    <div class="gallery">
      <div v-for="item in gallery" :key="item.id" class="gallery-item">
        <img :src="item.image" alt="Gallery Item" style="max-width: 100%; height: auto;">
        <div class="gallery-text">
          <h3>{{ item.name }}</h3>
          <p>Contact: {{ item.contact }}</p>
          <p>Address: {{ item.address }}</p>
          <router-link :to="'/update/' + item.id">Update</router-link>
          <button v-on:click="deleteGallery(item.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      name: '',
      gallery: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async deleteGallery(id) {
      let result = await axios.delete('http://localhost:3000/gallery/' + id);
      console.warn(result.status);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: 'SignUp' });
      }
      let result = await axios.get('http://localhost:3000/gallery');

      this.gallery = result.data;
    },
  },

  async mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gallery-item {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  max-width: 300px;
}

.gallery-text {
  text-align: center;
}
</style>





