<template>
    <div>
      <Header />
      <div class="content-wrapper">
        <br><br><br><br>
        <h1>Your Shopping Cart</h1><br><br>
        <div v-if="cart.length === 0">
          <p>Your cart is empty.</p>
        </div>
        <div v-else>
          <div v-for="item in cart" :key="item.id" class="cart-item">
            <img :src="item.image" alt="Cart Item" style="max-width: 100%; height: auto;">
            <div class="cart-item-text">
              <h3>{{ item.name }}</h3>
              <p>Contact: {{ item.contact }}</p>
              <p>Address: {{ item.address }}</p>
              <div class="cart-actions">
                <button @click="decrementQuantity(item)">-</button>
                <span>{{ item.quantity }}</span>
                <button @click="incrementQuantity(item)">+</button>
                <button @click="removeFromCart(item)">Remove from Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  
  export default {
    name: 'Cart',
    data() {
      return {
        cart: [],
      };
    },
    components: {
      Header,
    },
    methods: {
      loadCart() {
        // Retrieve cart items from local storage
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
      },
      removeFromCart(item) {
        // Remove item from cart
        this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
      incrementQuantity(item) {
        // Increase quantity of the item in the cart
        item.quantity = (item.quantity || 1) + 1;
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
      decrementQuantity(item) {
        // Decrease quantity of the item in the cart, remove if quantity becomes zero
        item.quantity = Math.max((item.quantity || 1) - 1, 0);
        if (item.quantity === 0) {
          this.removeFromCart(item);
        } else {
          localStorage.setItem('cart', JSON.stringify(this.cart));
        }
      },
    },
    mounted() {
      this.loadCart();
    },
  };
  </script>
  
  <style scoped>
  .content-wrapper {
    text-align: center;
  }
  
  .cart-item {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    max-width: 300px;
    margin: 0 auto; /* Center the cart item */
  }
  
  .cart-item img {
    max-width: 100%;
    height: auto;
  }
  
  .cart-item-text {
    text-align: center;
  }
  
  .cart-actions {
    margin-top: 10px;
  }
  
  button {
    margin: 0 5px;
  }
  </style>
  
  
  
  
  