<script>

import cardApp from './cardApp.vue';
import { store } from '../../store';

export default{
    name: 'containerApp',
    components:{
        cardApp,
    },
    data(){
        return{
            store,
        };
    },
    computed:{
        getResults(){
            const searchResults = [...store.searched, ...store.searchedSerie];
            return searchResults;
        },
    },
    methods: {
        hScroll(event){
            event.currentTarget.scrollLeft += event.deltaY;
        },
    },
};

</script>

<template>
    <div class="cdcontainer rounded m-auto py-3">
        <h1 class="fw-semibold text-secondary text-center" v-if="getResults.length == 0"> Esplora il catalogo, film e serie TV ti aspettano </h1>
        <h1 class="ms-4 fw-semibold text-secondary" v-else> Risultati trovati:</h1>
        <div class="cards d-flex" @wheel.preventDefault="hScroll($event)">
            <cardApp class="mx-3" v-for="foundResult in getResults"
            :poster="this.store.alldata.poster"
            :result="foundResult"></cardApp>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables';

.cdcontainer{
    background-color: variables.$card-container;
    width: 90%;

    .cards{
        overflow: hidden;
    }
}
</style>