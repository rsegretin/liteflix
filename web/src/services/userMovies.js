import axios from 'axios';

export const addUserMovie = async (movie) => {
    return await axios.post('http://localhost:3000/user-list/add-movie', movie);
}

export const getAllUserMovies = async () => {
    const result = await axios.get('http://localhost:3000/user-list/get-all-movies');
    return result.data;
}