import {reactive} from "vue";

export const store = reactive({
    alldata: {
        movie_api: 'http://api.themoviedb.org/3/search/movie',
        api_key: '0c33757391e4c269e5804ffb1423f5d5',
        query: 'last'
    }
})