<template>
  <div class="home">
    <Showcase />
    <Users :users="users" />
  </div>
</template>

<script>
import Showcase from '@/components/Showcase.vue';
import Users from '@/components/Users.vue';

export default {
  name: 'home',
  components: {
    Showcase,
    Users,
  },
  props: [
    'users'
  ]
};
</script>
