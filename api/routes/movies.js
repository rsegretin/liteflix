import express from 'express';
import getMoviesConfig from '../helpers/moviesConfig.js';
import { stringFloat2FixedString } from '../helpers/format.js';

const moviesRouter = express.Router();

const moviesConfig = await getMoviesConfig();

const FEATURED_MOVIE_REQUEST = 'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20';
const POPULAR_MOVIES_REQUEST = 'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20';

moviesRouter.get('/featured', async (req, res, next) => {
    try {
        const featuredData = await getFeaturedData();
        res.send(featuredData);
    } catch (err) {
        next(err);
    }
});

moviesRouter.get('/popular', async (req, res, next) => {
    try {
        const popularData = await getPopularData();
        res.send(popularData);
    } catch (err) {
        next(err);
    }
});

const getFeaturedData = async () => {
    const res = await fetch(FEATURED_MOVIE_REQUEST).then(res => res.json());
    const featuredElement = res.results[1];
    return {
        title: featuredElement.title,
        posterImgPath: `${moviesConfig.base_url}original${featuredElement.backdrop_path}`
    };
}

const getPopularData = async () => {
    const res = await fetch(POPULAR_MOVIES_REQUEST).then(res => res.json());
    return res.results.slice(1, 5).map(item => ({
        title: item.title,
        cover: `${moviesConfig.base_url}original${item.backdrop_path}`,
        rating: stringFloat2FixedString(item.vote_average),
        year: item.release_date.substring(0, item.release_date.indexOf('-'))
    }));
}

export default moviesRouter;