<script>

import headerApp from './components/header/headerApp.vue'
import mainApp from './components/main/mainApp.vue';

export default{
    components:{
        headerApp,
        mainApp,
    },
    data(){
        return{
        }       
    },
    methods: {
        // rating(vote){
        //     const starsRating = this.store.alldata.maxRate / this.store.alldata.maxStars;
        //     const finalVote = Math.ceil(vote / starsRating);
        //     return (finalVote);
        // }
    },
}

</script>


<template>
    <headerApp> </headerApp>
    <mainApp></mainApp>

        <!-- <div class="container m-5 d-flex justify-content-center flex-wrap">
            <ul v-for="found in store.searched">
                <li>
                    <div>
                        <img :src="`${store.alldata.poster}${found.poster_path}`" :alt="found.original_title"
                        onerror="onerror=null;src='../src/assets/img/noposter.jpeg'">
                    </div>
                </li>
                <li><strong>titolo:</strong> {{ found.title }}</li>
                <li><strong>titolo originale:</strong> {{ found.original_title }}</li>
                <li>
                    <strong>lingua:</strong> 
                    <img class="small" :src="`../src/assets/img/language-icons/icons/${found.original_language}.png`" :alt="found.original_language"></li>
                <li>
                    <strong>stelle:</strong>
                    <i v-for="finalVote in rating(found.vote_average)" class="fa-solid fa-star"></i>
                    <i v-for="empty in (store.alldata.maxStars - rating(found.vote_average))" class="fa-regular fa-star"></i>
                </li>
            </ul>
        </div>

        <div class="container m-5 d-flex justify-content-center flex-wrap">
            <ul v-for="foundTv in store.searchedSerie">
                <li>
                    <div>
                        <img :src="`${store.alldata.poster}${foundTv.poster_path}`" :alt="foundTv.original_name"
                        onerror="onerror=null;src='../src/assets/img/noposter.jpeg'">
                    </div>
                </li>
                <li><strong>titolo: </strong> {{ foundTv.name }}</li>
                <li><strong>titolo originale: </strong> {{ foundTv.original_name }}</li>
                <li>
                    <strong>lingua: </strong> 
                    <img class="small" :src="`../src/assets/img/language-icons/icons/${foundTv.original_language}.png`" :alt="foundTv.original_language"></li>
                <li>
                    <strong>stelle: </strong> 
                    <i v-for="finalVote in rating(foundTv.vote_average)" class="fa-solid fa-star"></i>
                    <i v-for="empty in (store.alldata.maxStars - rating(foundTv.vote_average))" class="fa-regular fa-star"></i>
                </li>
            </ul>
        </div> -->

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
