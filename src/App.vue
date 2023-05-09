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
    
    <div class="bg-primary">
        <div class="container m-5">
            <form @submit.prevent="search">
                <input v-model="store.query" type="search" name="search-movie" id="search-movie">
                <button> Search </button>
            </form>
        </div>

        <div class="container m-5">
            <ul v-for="found in store.searched">
                <li><strong>titolo:</strong> {{ found.title }}</li>
                <li><strong>titolo originale:</strong> {{ found.original_title }}</li>
                <li><strong>lingua:</strong> {{ found.original_language }}</li>
                <li><strong>stelle:</strong> {{ found.vote_average }}</li>
            </ul>
        </div>
    </div>

</template>


<style lang="scss">

@use './style/main.scss';

</style>
