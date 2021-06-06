import request from './http'
import { API_KEY } from 'utils/secrets'

const API = {
    getMovies: (text) => request(`/search/movie?api_key=${API_KEY}&query=${text}`),
    getMovieDetail: (id) => request(`/movie/${id}?api_key=${API_KEY}`),
}

export default API
