<template>
  <div>
    <Header />
    <div class="content-wrapper">
      <br /><br /><br /><br />
      <h1>Your Shopping Cart</h1>
      <br /><br />
      <div v-if="cart.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <div class="cart-item-container">
            <img :src="item.image" alt="Cart Item" class="cart-item-image" />
            <div class="cart-item-details">
              <h3>{{ item.name }}</h3>
              <p>Materials used: {{ item.contact }}</p><br />
              <p>Price: ${{ item.address }}</p>
              <br />
              <div class="quantity-controls">
                <button @click="decreaseQuantity(item)">-</button>
                <span>{{ item.quantity }}</span>
                <button @click="increaseQuantity(item)">+</button>
              </div><br />
              <button @click="removeFromCart(item)">Remove from Cart</button>
              <br /><br />
            </div>
          </div>
          <hr />
        </div>
        <div class="total-price">
          <p>Total Price: ${{ totalPrice }}</p>
          <router-link to="/checkout">
            <button @click="checkout">Checkout</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue';

export default {
  name: 'Cart',
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const cart = ref([]);

    const loadCart = () => {
      const storedCart = localStorage.getItem('cart');
      cart.value = storedCart ? JSON.parse(storedCart) : [];
    };

    const removeFromCart = (item) => {
      cart.value = cart.value.filter(cartItem => cartItem.id !== item.id);
      localStorage.setItem('cart', JSON.stringify(cart.value));
    };

    const increaseQuantity = (item) => {
      item.quantity = (item.quantity || 1) + 1;
      localStorage.setItem('cart', JSON.stringify(cart.value));
    };

    const decreaseQuantity = (item) => {
      if (item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(cart.value));
      }
    };

    const checkout = () => {
      router.push('/checkout');
    };

    const totalPrice = computed(() => {
      return cart.value.reduce((total, item) => {
        return total + (item.address || 0) * (item.quantity || 1);
      }, 0).toFixed(2);
    });

    onMounted(() => {
      loadCart();
    });

    return {
      cart,
      loadCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      checkout,
      totalPrice,
    };
  },
};
</script>

<style scoped>
  .cart-item {
    margin-bottom: 20px;
  }

  .cart-item-container {
    display: flex;
    align-items: center;
  }

  .cart-item-image {
    width: 250px; 
    margin-right: 60px; 
  }

  .cart-item-details {
    flex: 1; 
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #ccc;
  }

  button {
    margin-top: 10px;
    width: 200px; 
    height: 40px;
    border: 1px solid rgb(255, 0, 0);
    background: rgb(46, 1, 1);
    color: white;
    cursor: pointer;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .quantity-controls button {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    background-color: #290000;
    color: white;
    border: none;
    cursor: pointer;
  }

  .total-price {
    margin-top: 20px;
    text-align: right;
  }

  .total-price button {
    margin-top: 10px;
    width: 200px;
    height: 40px;
    border: 1px solid #c90d00;
    background: #300000;
    color: white;
    cursor: pointer;
  }
</style>


  

  
  
  
  