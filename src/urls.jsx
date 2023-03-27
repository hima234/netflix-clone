import { API_KEY } from "./constants/constants"
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy =`discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror =`discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance =`discover/movie?api_key=${API_KEY}&with_genres=10749`
export const ScienceFiction =`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate`
export const Mystery =`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648&with_watch_monetization_types=flatrate`
export const Fantasy =`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&with_watch_monetization_types=flatrate`
export const Animation =`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`
export const Adventure =`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate`