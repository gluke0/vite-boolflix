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
            axios.get(this.store.alldata.movieApi,{
                params: {
                    api_key: this.store.alldata.apiKey,
                    language: this.store.alldata.itTranslate,
                    query: this.store.query,
                }
            })
            .then ((res) => {
                this.store.searched = res.data.results;
            });

            axios.get(this.store.alldata.serieApi,{
                params:{
                    api_key: this.store.alldata.apiKey,
                    language: this.store.alldata.itTranslate,
                    query: this.store.query,
                }
            })
            .then ((res) => {
                this.store.searchedSerie = res.data.results;
            });
        }
    },
}

</script>


<template>
    
    <div id="vp" class="bg-primary overflow-auto">
        <div class="container m-5 d-flex justify-content-center">
            <form @submit.prevent="search">
                <input class="p-2" v-model="store.query" type="text" placeholder="Ricerca film o serie TV" name="search-movie" id="search-movie">
                <button class="p-2"> Search </button>
            </form>
        </div>

        <div class="container m-5 d-flex justify-content-center flex-wrap">
            <ul v-for="found in store.searched">
                <li><strong>titolo:</strong> {{ found.title }}</li>
                <li><strong>titolo originale:</strong> {{ found.original_title }}</li>
                <li><strong>lingua:</strong> <img class="small" :src="`../node_modules/language-icons/icons/${found.original_language}.png`" :alt="found.original_language"></li>
                <li><strong>stelle:</strong> {{ found.vote_average }}</li>
            </ul>
        </div>

        <div class="container m-5 d-flex justify-content-center flex-wrap">
            <ul v-for="foundTv in store.searchedSerie">
                <li><strong>titolo:</strong> {{ foundTv.name }}</li>
                <li><strong>titolo originale:</strong> {{ foundTv.original_name }}</li>
                <li><strong>lingua:</strong> <img class="small" :src="`../node_modules/language-icons/icons/${foundTv.original_language}.png`" :alt="foundTv.original_language"></li>
                <li><strong>stelle:</strong> {{ foundTv.vote_average }}</li>
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
