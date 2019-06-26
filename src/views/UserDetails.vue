<template>
    <div class="user-details">
        <UserDetailInfo :user=user />
    </div>
</template>

<script>
import UserDetailInfo from '@/components/UserDetailInfo.vue';

export default {
    name: "UserDetails",
    components: {
        UserDetailInfo,
    },
    props: [
        'user'
    ],
};
</script>

