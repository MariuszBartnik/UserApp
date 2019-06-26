<template>
  <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link :to="{name: 'change-user', params: {currentComponent}}" class="add-user">+</router-link>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return {
      currentComponent: 'add'
    }
  }
};
</script>

<style scoped lang="scss">
$primary-color: #42b983;
$secondary-color:#2c3e50;
$third-color: #f4f4f4;

#nav{
  background: $secondary-color;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  ul{
    list-style: none;
    display: flex;
    width: 30%;
    justify-content: space-around;
  }

  a{
    color: $third-color;
    text-decoration: none;

    &:hover{
      color: $primary-color;
    }
  }

  .add-user{
    background: $primary-color;
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    text-align: center;
    line-height: 2rem;
    border-radius: 50%;

    &:hover{
      color: $secondary-color;
    }
  }
}
</style>
