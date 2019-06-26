<template>
    <div class="user">
        <img :src="getImage()" alt="">
        <h2>{{ user.name }}</h2>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
        <router-link :to="{name: 'user-details', params: { user }}" class="btn-primary">See more details >></router-link>
    </div>
</template>

<script>
export default {
    name: "User",
    props: [
        "user"
    ],
    methods: {
        getImage(){
            return `https://source.unsplash.com/random/250x250/?sig=${this.user.id}`
        },
    }
}
</script>

<style lang="scss" scoped>
$primary-color: #42b983;
$secondary-color:  #2c3e50;
$third-color: #f4f4f4;

    .user{
        margin: 1rem 0;
        text-align: center;
        
        h2{
            margin-bottom: 1rem;
        }
        
        p{
            color:$secondary-color; 
        }

    }
    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        display: block;
        margin: 0.5rem auto;
    }

    .btn-primary{
        background: $primary-color;
        color: $third-color;
        width: 80%;
        padding: 1rem 0;
        margin: 1rem auto;
        text-decoration: none;
        border-radius: 1.5rem;
        display: block;

        &:hover{
            color: $secondary-color;
        }
    }

</style>
