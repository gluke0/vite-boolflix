import {reactive} from "vue";

export const store = reactive({
    alldata: {
        generalApi: 'https://api.themoviedb.org/3/',
        options: {
            movie: 'search/movie',
            serie: 'searvh/tv',
        },
        apiKey: '0c33757391e4c269e5804ffb1423f5d5',
        itTranslate: 'it-IT',
        poster: 'https://image.tmdb.org/t/p/w342',
        maxRate: 10,
        maxStars: 5,
    },
    query: '',
    searched: [],
    searchedSerie: [],
})