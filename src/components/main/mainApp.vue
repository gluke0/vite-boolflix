<script>

import containerApp from './containerApp.vue';

export default{
    components:{
        containerApp,
    },
    data(){
        return {
            name: 'mainApp'
        }
    }
}
</script>

<template>
    <main class="d-flex flex-column justify-content-evenly py-3">

        <containerApp> </containerApp>

        <containerApp> </containerApp>

    </main>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables';

main{
    background-color: variables.$main;
    height: calc(100vh - variables.$header-height);
}

</style>