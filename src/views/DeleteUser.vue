<template>
    <div class="delete-user">
        <DeleteUserForm :user=user @deleteUser="deleteUser($event)" />
    </div>
</template>

<script>
import DeleteUserForm from '@/components/DeleteUserForm.vue'

export default {
    name: 'DeleteUser',
    components: {
        DeleteUserForm
    },
    props:[
        'user'
    ],
    methods: {
        deleteUser(user){
            this.$emit('deleteUser', user);
        }
    }
}
</script>

<style lang="scss" scoped>
    .delete-user{
        text-align: center;
        padding: 2rem;
    }
</style>
