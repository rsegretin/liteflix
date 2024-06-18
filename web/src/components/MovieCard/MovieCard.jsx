import React from 'react';
import './MovieCard.css';
import playIcon from '../../assets/play-icon.svg';

const MovieCard = ({ title, coverImg, rating, year }) => {

  return (
    <div className='movie-card'>
      <div className='movie-card-cover-background'>
        <img className='movie-card-cover' src={coverImg} />
      </div>
      <img className='movie-play-icon' src={playIcon} />
      <div className='movie-title'>{title}</div>
      <div className='movie-footer'>
        <div className='rating'>
          {rating && <span className='rating-star fa fa-star checked'></span>}
          <span className='rating-value'>{rating}</span>
        </div>
        <div className='year'>{year}</div>
      </div>
    </div>
  )
}

export default MovieCard
