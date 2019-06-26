<template>
    <div class="user-edit-form">
        <div class="edit-form" v-if="!editComplete">
            <h2>Edit user</h2>
            <form @submit.prevent="editUser()">
                <input type="text" name="name" v-model="name" placeholder="Name">
                <input type="text" name="email" v-model="email" placeholder="E-mail">
                <input type="text" name="city" v-model="city" placeholder="City">
                <input type="text" name="street" v-model="street" placeholder="Street">
                <input type="text" name="phone" v-model="phone" placeholder="Phone">
                <input type="text" name="website" v-model="website" placeholder="Website">
                <input type="text" name="company" v-model="company" placeholder="Company">
                <input type="submit" value="Edit user">
            </form>
        </div>
        <div class="edit-msg" v-else>
            <div class="msg msg-success">
                <h2>Used edition completed</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserEditForm",
    data(){
        return {
            name: this.user.name,
            email: this.user.email,
            city: this.user.address.city,
            street: this.user.address.street,
            phone: this.user.phone,
            website: this.user.website,
            company: this.user.company.name,
            editComplete: false
        }
    },
    props: [
        "user"
    ],
    methods: {
        editUser(){
            let editedUser = {
                "id": this.user.id,
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

            this.$emit('editUser', editedUser);

            this.editComplete = true
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

.edit-msg{
    min-height: 70vh;
    position: relative;
}

@media(min-width: 768px){
    input[type="submit"]{
        width: 20%;
        margin-left: 60%;
    }   
}


</style>
