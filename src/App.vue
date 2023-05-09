<script>

import {store} from './store';
import axios from 'axios';

export default{
    data(){
        return{
            store
        }       
    },
    
    created(){
        axios.get(store.alldata.movie_api,{
            params: {
                api_key: store.alldata.api_key,
                query: store.alldata.query
            }
        })
        .then ((res) => {
            console.log(res.data);
        })
    }
}

</script>


<template>
  
</template>


<style lang="scss">

@use './style/main.scss';

</style>
