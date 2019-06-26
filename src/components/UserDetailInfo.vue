<template>
    <div class="user-detail-info">
        <img :src="getImage()" alt="">
        <h2> My name is <br> <span>{{ user.name }}</span></h2>
        <div class="output">
            <h4 v-if="currentDetail == 'email'">My email address is: <br><span>{{user.email}}</span>  </h4>
            <h4 v-if="currentDetail == 'phone'">My phone number is: <br><span>{{user.phone}}</span>  </h4>
            <h4 v-if="currentDetail == 'address'">My address is: <br><span>{{user.address.street}}, {{user.address.city}}</span>  </h4>
            <h4 v-if="currentDetail == 'company'">Currently I work for: <br><span>{{user.company.name}}</span>  </h4>
            <h4 v-if="currentDetail == 'website'">My website address is: <br><span>{{user.website}}</span>  </h4>
            
        </div>

        <div class="form">
            <button class="btn-primary" :class="{'active': currentDetail=='email'}" @click="currentDetail='email'">
                <i class="fas fa-envelope"></i>
            </button>
            <button class="btn-primary"  :class="{'active': currentDetail=='phone'}" @click="currentDetail='phone'">
                <i class="fas fa-phone"></i>
            </button>
            <button class="btn-primary" :class="{'active': currentDetail=='address'}" @click="currentDetail='address'">
                <i class="fas fa-map-marker-alt"></i>
            </button>
            <button class="btn-primary" :class="{'active': currentDetail=='company'}" @click="currentDetail='company'">
                <i class="fas fa-user-tie"></i>
            </button>
            <button class="btn-primary" :class="{'active': currentDetail=='website'}" @click="currentDetail='website'">
                <i class="fas fa-globe"></i>
            </button>
        </div>


        <div class="edit">
            <router-link :to="{name:'change-user', params: {currentComponent, user}}" class="btn-secondary btn-edit">Edit user</router-link>
            <router-link :to="{name:'delete-user', params: {user}}" class="btn-secondary btn-delete">Delete User</router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: "UserDetailInfo",
    data(){
        return {
            currentDetail: "email",
            currentComponent: 'edit'
        }
    },
    props: [
        "user"
    ],
    methods: {
        getImage(){
            return "https://source.unsplash.com/random/250x250/?sig="+this.user.id
        }
    }
}
</script>

<style lang="scss" scoped>
$primary-color: #42b983;
$secondary-color:  #2c3e50;
$third-color: #f4f4f4;

.user-detail-info{
    text-align: center;


    img{
        width: 250px;
        height: 250px;
        display: block;
        margin: 1rem auto;
        border-radius: 50%;
    }

    h2{
        font-size: 1.6rem;
        span{
            font-size: 2rem;
        }
    }

    h4{
        font-size: 1rem;
        margin: 1.5rem;
        color: $secondary-color;

        span{
            font-size: 1.4rem;
        }
    }

    .btn-primary{
        width: 50px;
        height: 50px;
        margin: 1rem;
        background: $primary-color;
        color: $third-color;
        outline: none;
        border: none;
        border-radius: 50%;

        &:hover{
            cursor: pointer;
            color: $secondary-color;
        }
        
        i{
            font-size: 1.5rem;
        }

    }
    .active{
        background: $secondary-color;
        color: $third-color;

        &:hover{
            color: $third-color;
        }
    }

    .edit{
        display: flex;
        justify-content: center;
    }

    .btn-secondary{
        width: 12rem;
        padding: 1rem;
        margin: 1rem;
        border: none;
        outline: none;
        border-radius: 1.5rem;
        cursor: pointer;
    }

    .btn-edit{
        background: $secondary-color;
        color:$third-color;
    }

    .btn-delete{
        background: #8d0303;
        color: $third-color;
    }

}


</style>
