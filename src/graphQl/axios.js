import axios from "axios";

export const moviesGraphQL = axios.create({
    baseURL: "https://tmdb.apps.quintero.io/",
    
})