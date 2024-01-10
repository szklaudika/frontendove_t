<template>
  
    <Header />
    <div class="content-wrapper">
      <br><br><br><br><br><br>
      <h1>About {{ selectedItem.name }}</h1>
      <br><br>
      <img :src="selectedItem.image" alt="Gallery Item" style="width: 50%; max-width: 100%; height: auto;">
      <br><br>
      
        
        <p>Materials used: {{ selectedItem.contact }}</p>
        <p>Price: {{ selectedItem.address }}</p>
        <br>
        <button @click="addToCart">Add to Cart</button>
      
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

      let itemId = this.$route.params.id; // Retrieve item id from route parameters
      let result = await axios.get('http://localhost:3000/gallery/' + itemId);

      this.selectedItem = result.data;
    },
    addToCart() {
      // Add your cart logic here, for example, storing the item in local storage
      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      cartItems.push(this.selectedItem);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      alert('Item added to cart!');
    },
  },

  async mounted() {
    this.loadData();
  },
};
</script>



