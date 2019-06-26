<template>
  <div id="app">
    <Navbar />
    <router-view 
      :users=users 
      @addUser="addUser($event)" 
      @editUser="editUser($event)"
      @deleteUser="deleteUser($event)"
    /> 
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

import axios from 'axios';

export default {
  components: {
    Navbar,
    Footer
  },
  data(){
    return {
      users: []
    }
  },
  methods:{
    addUser(newUser){
      axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        this.users.push(response.data);
      })
    },
    editUser(editedUser){
      if(editedUser.id !== 11){
        axios.put(`https://jsonplaceholder.typicode.com/users/${editedUser.id}`, editedUser)
        .then(response => {
          let index = this.users.findIndex((user) => user.id === editedUser.id)
          this.users[index] = editedUser;
        })
      }else{
        this.users[10] = editedUser
      }
    },
    deleteUser(deletedUser){
      axios.delete(`https://jsonplaceholder.typicode.com/users/${deletedUser.id}`)
      .then(this.users = this.users.filter(user => user.id !== deletedUser.id))
    }
  },
  mounted(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      this.users = response.data
    });
  }

};
</script>


<style lang="scss">
$primary-color: #42b983;
$secondary-color: #2c3e50;
$third-color: #f4f4f4;

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.msg{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.4);
  
  h2{
      font-size: 2rem;
  }
}
.msg-danger{
    background: #8d0303;
    color: $third-color;
}

.msg-success{
    background: #055005;
    color: $third-color;
}

</style>
