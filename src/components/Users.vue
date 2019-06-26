<template>
    <div class="users">
        <User v-for="user in users" :key="user.id" :user=user />
    </div>
</template>

<script>
import User from '@/components/User.vue'

export default {
    name: "Users",
    components:{
        User
    },
    props:[
        "users"
    ]
}
</script>

<style lang="scss" scoped>
$primary-color: #42b983;
$secondary-color:#2c3e50;
$third-color: #f4f4f4;

    .users{
        display: grid;
        grid-template-columns: 1fr;
        padding: 5% 10%; 
    }

    @media(min-width: 768px){
        .users{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media(min-width: 992px){
        .users{
            grid-template-columns: repeat(4, 1fr);
        }        
    }

</style>
