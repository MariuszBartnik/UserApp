<template>
    <div class="delete-user-form">
        <div class="delete-confirmation" v-if="!deleteComplete">
            <h2>Are You sure You want to delete this User?</h2>
            <img :src="getImage()" alt="">
            <h2>{{ user.name }}</h2>
            <p>Email: {{ user.email }}</p>
            <p>Phone: {{ user.phone }}</p>

            <div class="buttons">
                <button @click="deleteUser(user)" class="btn btn-danger">Confirm</button>
                <button class="btn btn-secondary"><router-link to="/">Cancel</router-link></button>    
            </div>
        </div>
        <div class="msg" v-else>
            <h2>User deleted</h2>
            <router-link to="/" class="btn-primary">Go back to main page</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "DeleteUserForm",
    data(){
        return {
            deleteComplete: false
        }
    },
    props: [
        "user"
    ],
    methods: {
        getImage(){
            return `https://source.unsplash.com/random/250x250/?sig=${this.user.id}`
        },
        deleteUser(user){
            this.$emit('deleteUser', user);
            this.deleteComplete = true;
        }
    }
}
</script>

<style lang="scss" scoped>
$primary-color: #42b983;
$secondary-color:  #2c3e50;
$third-color: #f4f4f4;

    .delete-confirmation{
        min-height: 70vh;
    }

    img{
        width: 250px;
        height: 250px;
        border-radius: 50%;
        display: block;
        margin: 0.5rem auto;
    }

    .buttons{
        display: flex;
        justify-content: center;
    }

    .btn{
        width: 10rem;
        padding: 1rem 0;
        margin: 1rem;
        border: none;
        offset: none;
        cursor: pointer;
        border-radius: 1.5rem;
    }

    .btn-danger{
        background: #8d0303;
        color: $third-color;
    }

    .btn-secondary{
        background: $secondary-color;

        a{
            display: block;
            width: 100%;
            height: 100%;
            color: $third-color;
            text-decoration: none;
            
        }        
    }



.btn-primary{
    text-align: center;
    width: 80%;
    height: 3rem;
    margin: 1rem auto;
    padding: 1rem 0;
    border-radius: 2rem;
    background: $primary-color;
    color: $third-color;
    text-decoration: none;
    display: block;
}

@media(min-width: 768px){
    .btn-primary{
        width: 50%;
    }
}
</style>
