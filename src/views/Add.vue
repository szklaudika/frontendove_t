<template>
  <Header />
 <h1>Add</h1>
 <form class="add">
  <input type="text" name="name" placeholder="Enter name" v-model="Gallery.name"/>
  <input type="text" name="address" placeholder="Enter address" v-model="Gallery.address"/>
  <input type="text" name="contact" placeholder="Enter contact" v-model="Gallery.contact"/>
  <button type="button" v-on:click="addGallery">Add new Gallery</button>
 </form>
</template>

<script>
import Header from '../components/Header.vue'
import axios from 'axios'
export default {
    name: 'Add',
    components:{
      Header
    },
    data()
    {
      return{
        Gallery :{
          name:'',
          address:'',
          contact:''
        }
      }
    },
    methods:{
        async addGallery()
        {
          console.warn(this.Gallery)
          const result = await axios.post("http://localhost:3000/gallery",{
            name:this.Gallery.name,
            address:this.Gallery.address,
            contact:this.Gallery.contact,
          });
          if(result.status==201)
          {
            this.$router.push({name:'Home'});
          }
          console.warn("result",result)
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


