import axios from 'axios';

export const getFeaturedMovie = async () => {
    const result = await axios.get('http://localhost:3000/movies/featured');
    return result.data;
}

export const getPopularMovies = async () => {
    const result = await axios.get('http://localhost:3000/movies/popular');
    return result.data;
}
