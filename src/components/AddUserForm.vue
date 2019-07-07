<template>
    <div class="add-user-form">
        <div class="add-form" v-if="!addComplete">
            <h2>Add new user</h2>
            <form @submit.prevent="addUser()">
                <input type="text" name="name" v-model="name" required placeholder="Name">
                <input type="text" name="email" v-model="email" required placeholder="E-mail">
                <input type="text" name="city" v-model="city" required placeholder="City">
                <input type="text" name="street" v-model="street" required placeholder="Street">
                <input type="text" name="phone" v-model="phone" required placeholder="Phone">
                <input type="text" name="website" v-model="website" required placeholder="Website">
                <input type="text" name="company" v-model="company" required placeholder="Company">
                <input type="submit" value="Add user">
            </form>
        </div>
        <div class="msg" v-else>
            <h2>User added</h2>
            <router-link to="/" class="btn-primary">Go back to main page</router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: "AddUserForm",
    data(){
        return {
            name: "",
            email: "",
            city: "",
            street: "",
            phone: "",
            website: "",
            company: "",
            addComplete: false

        }
    },
    methods: {
        addUser(){
            let newUser = {
                "name": this.name,
                "email": this.email,
                "address": {
                    "city": this.city,
                    "street": this.street
                },
                "phone": this.phone,
                "website": this.website,
                "company": {
                    "name": this.company
                }
            }
            if(newUser.name !== "" && newUser.email !== "" 
                && newUser.address.city !== "" && newUser.address.street !== "" 
                && newUser.phone !== "" && newUser.website !== "" && newUser.company.name !== ""){

                this.$emit('addUser', newUser)
                this.addComplete = true
            }

        }
        
    }
}
</script>

<style lang="scss" scoped>
$primary-color: #42b983;
$secondary-color:  #2c3e50;
$third-color: #f4f4f4;

h2{
    text-align: center;
    margin: 1.5rem 0;
}

form{
    margin: 3rem 0;
}

input[type="text"]{
    display: block;
    width: 60%;
    margin: 1.2rem auto;
    font-size: 1.2rem;
    padding: 0.2rem 1rem;
}

input[type="submit"]{
    display: block;
    width: 60%;
    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 0 auto;
    border: none;
    background: $primary-color;
    color: $third-color;
    border-radius: 1.5rem;

    &:hover{
        cursor: pointer;
        color: $secondary-color;
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
    input[type="submit"]{
        width: 20%;
        margin-left: 60%;
    }   


    .btn-primary{
        width: 50%;
    }
}

</style>
