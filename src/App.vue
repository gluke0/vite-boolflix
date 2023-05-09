<script>

import {store} from './store';
import axios from 'axios';

export default{
    data(){
        return{
            store
        }       
    },
    methods: {
        search(){
            axios.get(store.alldata.movieApi,{
                params: {
                    api_key: store.alldata.apiKey,
                    query: store.query
                }
            })
            .then ((res) => {
                store.searched = res.data.results;
            })
        }
    }  
}

</script>


<template>
    
    <div id="vp" class="bg-primary overflow-auto">
        <div class="container m-5 d-flex justify-content-center">
            <form @submit.prevent="search">
                <input v-model="store.query" type="search" name="search-movie" id="search-movie">
                <button> Search </button>
            </form>
        </div>

        <div class="container m-5 d-flex justify-content-center flex-wrap">
            <ul v-for="found in store.searched">
                <li><strong>titolo:</strong> {{ found.title }}</li>
                <li><strong>titolo originale:</strong> {{ found.original_title }}</li>
                <li><strong>lingua:</strong> <img class="small" :src="`../node_modules/language-icons/icons/${found.original_language}.svg`" alt=""></li>
                <li><strong>stelle:</strong> {{ found.vote_average }}</li>
            </ul>
        </div>
    </div>

</template>


<style lang="scss">

@use './style/main.scss';

#vp{
    height: 100vh;
    width: 100%;

    ul{
        width: calc(100% / 2);
    }

    .small{
        width: 12px
    }
}

</style>
