import express from 'express';
import { addMovie, getAllMovies } from '../controllers/userMovies.js';

const userListRouter = express.Router();

userListRouter.post('/add-movie', async (req, res, next) => {
    try {
        const result = await addMovie(req.body)
        res.send(JSON.stringify(result));
    } catch (err) {
        next(err);
    }
});

userListRouter.get('/get-all-movies', async (req, res, next) => {
    try {
        const movies = await getAllMovies();
        res.send(movies);
    } catch (err) {
        next(err);
    }
});

export default userListRouter;