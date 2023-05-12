<script>

import searchApp from './searchApp.vue';

    export default {
        name: 'headerApp',
        components:{
            searchApp,
        },
        data() {
            return{
            }
        }
    }
</script>

<template>
    <header class="p-2">
        <div class="d-flex">
            <div class="logo position-absolute">
                <a href="#"> <img src="../../assets/img/logo.png" alt="Logo"> </a>
            </div>
            <searchApp class="m-auto"></searchApp>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables';

    header{
        background-color: variables.$header;
        height: variables.$header-height;

    }

    .logo img{
        width: 9rem;
    }

</style>