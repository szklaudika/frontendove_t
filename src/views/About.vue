<template>
  <div>
    <Header />
    <div class="content-wrapper">
      <br><br><br><br><br>
      <h1>About {{ selectedItem.name }}</h1>
      <br><br>
      <img :src="selectedItem.image" alt="Gallery Item" style="width: 30%; max-width: 100%; height: auto;">
      <br>
      <p>Materials used: {{ selectedItem.contact }}</p>
      <p>Price: {{ selectedItem.address }}</p>
      <br>
      <button @click="addToCart" style="width: 300px; height: 40px; border: 1px solid rgb(95, 151, 255); background: rgb(46, 1, 1); color: white; cursor: pointer;">
        Add to Cart
      </button>
      <br><br><br>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import axios from 'axios';

export default {
  name: 'About',
  data() {
    return {
      selectedItem: {
        id: '',
        name: '',
        address: '',
        contact: '',
        image: '',
      },
    };
  },
  components: {
    Header,
  },
  methods: {
    async loadData() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({ name: 'SignUp' });
      }

      let itemId = this.$route.params.id; 
      let result = await axios.get('http://localhost:3000/gallery/' + itemId);

      this.selectedItem = result.data;
    },
    addToCart() {
      
      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const itemExists = cartItems.some(item => item.id === this.selectedItem.id);

      if (!itemExists) {
        cartItems.push(this.selectedItem);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        alert('Item added to cart!');
      } else {
        alert('Item is already in the cart!');
      }
    },
  },

  async mounted() {
    this.loadData();
  },
};
</script>





