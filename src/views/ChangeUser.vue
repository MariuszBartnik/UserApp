<template>
  <div class="add-user">
      <component 
        @addUser="addUser($event)" 
        @editUser="editUser($event)" 
        :user="user" 
        :is="getCurrentComponent()"
      />
  </div>
</template>

<script>
import AddUserForm from '@/components/AddUserForm.vue';
import UserEditForm from '@/components/UserEditForm.vue'

export default {
    name: "ChangeUser",
    props: [
      "currentComponent",
      "user",
    ],
    components: {
        AddUserForm,
        UserEditForm,
    },
    methods: {
      getCurrentComponent(){
        if(this.currentComponent === 'add'){
          return AddUserForm
        }else if(this.currentComponent === 'edit'){
          return UserEditForm
        }
      },
      addUser(newUser){
        this.$emit('addUser', newUser)
      },
      editUser(editedUser){
        this.$emit('editUser', editedUser)
      }
    }
}
</script>
