<template>
    
      <Header />
      <br><br><br><br>
      <div class="content-wrapper">
        <h1>About Me</h1><br><br><br>
        <div class="about-section">
          <img src="https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/329114349_1239930283280596_1713231655550793663_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=OwY6TttgakYAX8u8mMm&_nc_ht=scontent-fra5-2.xx&oh=00_AfDtPpZUGBLD4O8uksGWOX3E5Pjhfwd2IJExIgnCuXNHDQ&oe=65A43DDD" alt="Artwork" class="artwork-image">
          <p>
            Hello! I'm Cloudy, an artist from Slovakia. <br><br>
            I'm 21 years old and have been passionate about drawing 
            since a very young age. <br><br>Drawing is not just a hobby for me, 
            it's a way of life and something I'm truly passionate about. 
            <br><br>Exploring my creativity through art brings me immense joy, and 
            <br><br>I'm grateful to be able to express myself through my drawings.
          </p>
        </div>
      </div>
    
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  
  export default {
    components: {
      Header,
    },
  };
  </script>
  
  <style scoped>
  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .about-section {
    display: flex;
    align-items: center;
  }
  
  .artwork-image {
    max-width: 400px;
    margin-right: 40px;
    border: 1px solid #420000;
  }
  </style>
  
  