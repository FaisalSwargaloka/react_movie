import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMoviesList = async () => {
    const movies = await axios.get(`${baseUrl}/movie/popular/?page=1&api_key=${apiKey}`)
    return movies.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}

export const MovieUpcoming = async () => {
    const upComing = await axios.get(`${baseUrl}/movie/upcoming?page=1&api_key=${apiKey}`)
    return upComing.data.results
}
export const getTvPopular = async () => {
    const seriesPopular = await axios.get(`${baseUrl}/trending/tv/week?page=1&api_key=${apiKey}`)
    return seriesPopular.data.results
}
export const getAirToday = async () => {
    const airingToday = await axios.get(`${baseUrl}/tv/airing_today?page=1&api_key=${apiKey}`)
    return airingToday.data.results
}
export const getTvTopRated = async () => {
    const tvTopRated = await axios.get(`${baseUrl}/tv/top_rated?page=1&api_key=${apiKey}`)
    return tvTopRated.data.results
}
export const getMovieTopRated = async () => {
    const movieTopRated = await axios.get(`${baseUrl}/movie/top_rated?page=1&api_key=${apiKey}`)
    return movieTopRated.data.results
}
export const getDetail = async (id) => {
    const detail = await axios.get(`${baseUrl}/movie/${id}?page=1&api_key=${apiKey}`)
    return detail.data
}
export const getSmilliar = async (id) => {
    const smilliar = await axios.get(`${baseUrl}/movie/${id}/similar?page=1&api_key=${apiKey}`)
    return smilliar.data.results
}
export const getDetailTv = async (id) => {
    const detailTv = await axios.get(`${baseUrl}/tv/${id}?page=1&api_key=${apiKey}`)
    return detailTv.data
}
export const getTvSmilliar = async (id) => {
    const smilliarTv = await axios.get(`${baseUrl}/tv/${id}/similar?page=1&api_key=${apiKey}`)
    return smilliarTv.data.results
}
export const getAnimeMovie = async () => {
    const animeMovie = await axios.get(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&api_key=${apiKey}`)
    return animeMovie.data.results
}
export const getAnimeTopRated = async () => {
    const animeTopRated = await axios.get(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&with_genres=16&api_key=${apiKey}`)
    return animeTopRated.data.results
}
export const getAnimeTerbaru = async () => {
    const animeTerbaru = await axios.get(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=16&api_key=${apiKey}`)
    return animeTerbaru.data.results
}
