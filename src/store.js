import {reactive} from "vue";

export const store = reactive({
    alldata: {
        movieApi: 'http://api.themoviedb.org/3/search/movie',
        apiKey: '0c33757391e4c269e5804ffb1423f5d5',
        query: 'last'
    }
})