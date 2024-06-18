import axios from 'axios';
import { SERVER_BASE_URL } from '../helpers/const';

export const getFeaturedMovie = async () => {
    const result = await axios.get(`${SERVER_BASE_URL}/movies/featured`);
    return result.data;
}

export const getPopularMovies = async () => {
    const result = await axios.get(`${SERVER_BASE_URL}/movies/popular`);
    return result.data;
}
