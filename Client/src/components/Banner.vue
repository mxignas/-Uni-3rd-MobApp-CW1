<template>
<!-- Creating banner -->
    <div class="banner">
        <div class="jumbotron jumbotron-fluid bg-info text-center">
            <div class="container">
                <h1 class="display-4 text-white text-left font-weight-bold">After School</h1>
                <p class="h1 text-white text-center">Classes and Activities</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner",
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    .container{
        margin-top: -50px;
    }
    .jumbotron {
        height: 170px;
    }
</style>