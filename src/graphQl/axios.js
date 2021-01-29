import axios from "axios";

export const trendingMovies = axios.create({
    baseURL: "https://tmdb.apps.quintero.io/",
    
})