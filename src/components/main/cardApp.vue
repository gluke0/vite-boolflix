<script>

import starsApp from './starsApp.vue'

export default{
    name: 'cardApp',
    components:{
        starsApp,
    },
    data(){
        return{
            alldata: {
                maxRate: 10,
                maxStars: 5,
            }
        }
    },
    props:{
        poster: String,
        title: String,
        vote: Number, 
        originalTitle: String, 
        originalLanguage: String,
        description: String,
    },
    computed:{
        getImagePath(){
            return new URL(this.poster, import.meta.url).href;
        },
        rating(vote){
            const starsRating = this.alldata.maxRate / this.alldata.maxStars;
            const finalVote = Math.ceil(this.vote / starsRating);
            return (finalVote);
        },
    }
}
</script>

<template>
    <div class="result-card position-relative">
        <div class="poster">
            <img :src="getImagePath" :alt="title"
            onerror="this.onerror=null;this.src='../src/assets/img/noposter.jpeg'">
        </div>
        <div class="info p-2 position-absolute">
            <starsApp :finalVote="rating" :maxStars="this.alldata.maxStars"></starsApp>
            <div class="other-info">
                <div class="title"> {{ title }} </div>
                <div class="original-title"> {{ originalTitle }} </div>
                <div class="original-language">
                    <img class="small" :src="`../src/assets/img/language-icons/icons/${this.original_language}.png`" :alt="this.original_language">
                </div>
                <div class="description"> {{ description }} </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../../style/partials/variables';

.poster{
    width: variables.$poster;
    .info{ 
        background-color: lightcyan;
        height: 33rem;
        opacity: 0;
        top: 0;
        right: 0;
        width: variables.$poster;

        &:hover{
            opacity: 1;
        }
    }
}

</style>