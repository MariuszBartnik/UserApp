<template>
    <div class="footer">
        Mariusz Bartnik &copy; 2019
    </div>
</template>

<script>
export default {
    name: "Footer"
};

</script>

<style lang="scss" scoped>

    $primary-color: #42b983;
    $secondary-color:#2c3e50;
    $third-color: #f4f4f4;

    .footer{
        background: $secondary-color;
        color: $third-color;
        text-align: center;
        padding: 1rem;
        font-size: 1.3rem;
        border-top: 3px solid $primary-color;
    }
</style>
