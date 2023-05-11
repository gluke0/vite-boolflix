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
        }
    }
};

</script>

<template>
    <div class="container rounded py-3">
        <h1 class="ms-4">titolo</h1>
        <div class="cards d-flex">
            <cardApp class="mx-3" v-for="foundResult in getResults"
            :poster="this.store.alldata.poster"
            :result="foundResult"></cardApp>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables';

.container{
    background-color: variables.$card-container;

    .cards{
        overflow-x: auto;
        overflow-y: hidden;
    }
}
</style>