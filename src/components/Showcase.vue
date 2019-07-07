<template>
    <div class="showcase">
        <div class="showcase-title">
            <div class="showcase-title-content">
                <h3 class="section-subheader">Vue.js</h3>
                <h1>User Application</h1>
                <p>Simple user aplication created with Vue.js</p>

                <a href="https://github.com/MariuszBartnik/UserApp/tree/Vue.js" class="btn-primary">See code on GitHub</a>
        
            </div>    
        </div>
        <div class="showcase-icon">
            <img alt="Vue.js Logo" src="../assets/logo.png">
        </div>

    </div>
</template>

<script>
export default {
    name: 'Showcase'
}
</script>

<style lang="scss" scoped>
$primary-color: #42b983;
$secondary-color:  #2c3e50;
$third-color: #f4f4f4;

.showcase{
    display: flex;
    height: 80vh;
    background: $third-color;
    color: $secondary-color;
    text-align: center;
    border-top: 3px solid $primary-color;
    border-bottom: 3px solid $primary-color;

    .showcase-title{
        width: 50%;
        padding-top: 20vh;
    }

    h1{
        color: $primary-color;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .showcase-icon{
        width:50%;
        height: 100%;
        background: $secondary-color;
        padding-top: 20vh;

        img{
            display: block;
            margin: 0 auto;
        }
    }

    .btn-primary{
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
    
}

@media(min-width: 768px){
    .showcase{

        h1{
            font-size: 3.5rem;
        }

        .btn-primary{
            width: 45%;
        }   
    }
}

</style>
