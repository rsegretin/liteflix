import React, { useState, useEffect } from 'react';
import './FeaturedMovie.css';
import { getFeaturedMovie } from '../../services/movies';

const Featured = () => {

    const [featuredMovieData, setFeaturedMovieData] = useState(null);

    useEffect(() => {
        getFeaturedMovie()
            .then(movie => setFeaturedMovieData(movie));            
    }, []);

    return (
        featuredMovieData && (
            <main className='feat'>
                <img className='feat-cover-img' src={featuredMovieData.posterImgPath} />
                <div className='feat-title'>
                    <div className='feat-pretitle'>Original de <span className='feat-pretitle-bold'>LITEFLIX</span></div>
                    <div className='feat-title-name'>{featuredMovieData.title}</div>
                </div>
                <div className='feat-buttons'>
                    <button className='feat-btn feat-primary-btn'><span className='feat-play-icon'>P</span>Reproducir</button>
                    <button className='feat-btn feat-secondary-btn'>+ Mi lista</button>
                </div>
            </main>
        )
    )
}

export default Featured
