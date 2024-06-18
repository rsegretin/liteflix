import axios from 'axios';
import { SERVER_BASE_URL } from '../helpers/const';

export const addUserMovie = async (movie) => {
    return await axios.post(`${SERVER_BASE_URL}/user-list/add-movie`, movie);
}

export const getAllUserMovies = async () => {
    const result = await axios.get(`${SERVER_BASE_URL}/user-list/get-all-movies`);
    return result.data;
}