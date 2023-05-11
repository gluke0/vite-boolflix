<script>

import cardApp from './cardApp.vue';

export default{
    components:{
        cardApp,
    },
    data(){
        return{
            name: 'containerApp'
        }
    }
}
</script>

<template>
    <div class="container rounded p-4">
        <h1>titolo</h1>
        <cardApp></cardApp>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables';
.container {
    background-color: variables.$card-container;
}
</style>