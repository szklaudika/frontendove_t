<template>
  <Header />
  <div class="content-wrapper">
    <br><br><br><br><br><br>
    <h1>Hello {{ name }}, Welcome on Home Page</h1>
    <br><br>
    <div class="gallery">
      <router-link :to="'/about/' + item.id" v-for="item in gallery" :key="item.id" class="gallery-item">
        <img :src="item.image" alt="Gallery Item" style="max-width: 100%; height: auto;">
        <div class="gallery-text">
          <h3>{{ item.name }}</h3>
          <p>Materials used: {{ item.contact }}</p>
          <p>Price: {{ item.address }}</p>
          <button @click="addToCart(item)">Add to Cart</button>
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
    addToCart(item) {
      // Add your cart logic here, for example, storing the item in local storage
      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      cartItems.push(item);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      alert('Item added to cart!');
      
      // Redirect to the Cart page
      this.$router.push({ name: 'Cart' });
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

button {
  margin-top: 10px;
}
</style>








