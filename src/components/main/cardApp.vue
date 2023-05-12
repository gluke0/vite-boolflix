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
        result: Object,
    },
    computed:{
        getImagePath(){
            return new URL(this.poster + this.result.poster_path, import.meta.url).href;
        },
        rating(vote){
            const starsRating = this.alldata.maxRate / this.alldata.maxStars;
            const finalVote = Math.ceil(this.result.vote_average / starsRating);
            return finalVote;
        },
    }
}
</script>

<template>
    <div class="result-card position-relative">
        <div class="poster">
            <img :src="getImagePath" :alt="result.title"
            onerror="this.onerror=null;this.src='../src/assets/img/noposter.jpeg'">
        </div>
        <div class="info text-white position-absolute start-0 bottom-0">
            <starsApp :finalVote="rating" :maxStars="this.alldata.maxStars" class="mx-1 p-2 position-absolute top-0 end-0 rounded-bottom"></starsApp>
            <div class="other-info p-2 position-absolute mx-1 bottom-0 rounded-top start-0">
                <h2 class="title fw-bold"> {{ result.title || result.name }} </h2>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="original-title"> {{ result.original_title || result.original_name }} </div>
                    <div class="language position-absolute ">
                        <img class="small" :src="`../src/assets/img/language-icons/icons/${result.original_language}.png`" :alt="result.original_language">
                    </div>
                </div>
                <div class="label fw-bold">Trama:</div>
                <div class="description"> {{ result.overview }} </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../../style/partials/variables';

.poster{
    width: variables.$poster;
    
    img{
        height: variables.$poster-h;
        object-fit: cover;
    }
}

.info{ 
        height: variables.$poster-h;
        opacity: 0;
        width: 100%;
        transition: opacity 2s;

        &:hover{
            opacity: 1;
        }

        &:not(:hover){
            opacity:0;
        }

        .other-info{
            background-color: variables.$opac;
            height: 80%;

        .original-title{
            margin-left: 2.5rem;
        }
        .language{
            width: 1.20rem;
        }

        .description {
            display: -webkit-box;
            -webkit-line-clamp: 10;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }
}
.small{
    width: 2rem;
}

</style>