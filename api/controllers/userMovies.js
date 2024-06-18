import { userMovie } from '../models/userMovie.js';

const addMovie = async (movie) => {
    const dbMovie = new userMovie({
        title: movie.title,
        base64Cover: movie.coverImgb64,
        year: movie.year,
        rating: movie.rating
    });

    await dbMovie.save();
}

const getAllMovies = async () => {
    return (await userMovie.find().limit(4).exec());
}

export {
    addMovie,
    getAllMovies
}