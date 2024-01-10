<template>
  <Header />
  <div class="content-wrapper">
    <br><br><br><br><br><br>
    <h1>Hello {{ name }}, I hope you like my art :)</h1>
    <br><br>
    <div class="gallery">
      <router-link :to="'/about/' + item.id" v-for="item in gallery" :key="item.id" class="gallery-item">
        <img :src="item.image" alt="Gallery Item" style="max-width: 100%; height: auto;">
        <div class="gallery-text">
          <h3 style="color: rgb(231, 119, 119);">{{ item.name }}</h3>
          <p>Materials used: {{ item.contact }}</p><br><br>
          <p>Price: {{ item.address }}</p>
        </div>
      </router-link>
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
  margin: 20px;
  padding: 10px;
  border: 1px solid #491717;
  max-width: 400px;
}

.gallery-text {
  text-align: center;
}


</style>








