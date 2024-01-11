<template>
    <div>
      <br><br><br><br><br><br>
      <div class="content-wrapper">
        <h1>Checkout</h1>
        <br><br>
        <div class="checkout-form">
          <input type="text" v-model="street" placeholder="Street" />
          <input type="text" v-model="houseNumber" placeholder="House Number" />
          <input type="text" v-model="city" placeholder="City" />
          <input type="text" v-model="postalCode" placeholder="Postal Code" /><br><br>
          <button @click="processCheckout">Complete Purchase</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Checkout',
    data() {
      return {
        street: '',
        houseNumber: '',
        city: '',
        postalCode: '',
      };
    },
    methods: {
  async processCheckout() {
    const checkoutData = {
      street: this.street,
      houseNumber: this.houseNumber,
      city: this.city,
      postalCode: this.postalCode,
    };

    try {
      const result = await axios.post('http://localhost:3000/checkout', checkoutData);

      if (result.status === 201) {
        console.log('Checkout successful!');
        this.$router.push({ name: 'Home' });
      } else {
        console.warn('Checkout failed. Please try again.');
        console.error('Server responded with status:', result.status);
      }
    } catch (error) {
      console.error('An error occurred during checkout:', error);

      if (error.response && error.response.data) {
        console.error('Server error message:', error.response.data);
      }
    }
  },
},
  };

  </script>
  
  <style scoped>
  .content-wrapper {
    text-align: center;
  }
  
  .checkout-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .checkout-form input {
    margin-bottom: 30px;
    padding: 15px;
    width: 350px;
  }
  
  .checkout-form button {
    padding: 10px;
    background-color: #350000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .checkout-form button:hover {
    background-color: #ff0000;
  }
  </style>
  
  