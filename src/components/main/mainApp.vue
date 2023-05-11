<script>

import containerApp from './containerApp.vue';

export default{
    name: 'mainApp',
    components:{
        containerApp,
    },
    data(){
        return {
        }
    }
}
</script>

<template>
    <main class="d-flex flex-column justify-content-evenly py-3">

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