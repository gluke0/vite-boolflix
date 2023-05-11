<script>

import axios from 'axios';
import {store} from '../../store';

    export default{
        name: 'searchApp',
        data(){
            return{
                store,
            }
        },
        methods:{
            activateApi(api){
                return axios.get(this.store.alldata.generalApi + api,{
                    params: {
                        api_key: this.store.alldata.apiKey,
                        language: this.store.alldata.itTranslate,
                        queery: this.store.query,
                    }
                })
            },
            search(){
                this.activateApi(this.store.alldata.options.movie)
                    .then((res) => {
                        this.store.searched = res.data.results;
                    });

                this.activateApi(this.store.alldata.options.serie)
                    .then((res) => {
                        this.store.searchedSerie = res.data.results;
                    });

                this.store.query = '';
            }
        }
    }
</script>


<template>

    <form @submit.prevent="search">
        <div class="searchbar input-group">
            <label for="searchbar" class="input-group-text">
                <i class="fa-solid fa-magnifying-glass"> </i>
            </label>
            <input v-model="this.store.query" type="search" id="searchbar" class="form-control" placeholder="Cerca film o serie TV">
        </div>
    </form>

</template>


<style lang="scss" scoped>
@use '../../style/partials/variables';

form{
    width: 35%;
    padding-top: 1.7rem;
}

</style>