<script>

import headerApp from './components/header/headerApp.vue'
import mainApp from './components/main/mainApp.vue';

export default{
    name: 'App',
    components:{
        headerApp,
        mainApp,
    },
    data(){
        return{
        }       
    },
    methods: {

    },
}

</script>


<template>

    <headerApp> </headerApp>
    <mainApp></mainApp>

</template>


<style lang="scss">

@use './style/main.scss';


</style>
