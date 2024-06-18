import React, { useState, useEffect } from 'react';
import './MoreMovies.css';
import MovieCard from '../MovieCard/MovieCard';
import ListDropdown from '../../components/ListDropdown/ListDropdown';
import { getAllUserMovies } from '../../services/userMovies';
import { SELECTION_MY_MOVIES, SELECTION_POPULAR } from '../../helpers/const.js';
import { getPopularMovies } from '../../services/movies';

const MoreMovies = () => {

  const [moviesListData, setMoviesListData] = useState(null);
  const [movieListSelection, setMovieListSelection] = useState(SELECTION_POPULAR);

  useEffect(() => {

    setMoviesListData(null);

    if (movieListSelection === SELECTION_MY_MOVIES) {
      getAllUserMovies()
        .then(movies => {
          setMoviesListData(movies);
        });
    } else {
      getPopularMovies()
        .then(movies => {
          setMoviesListData(movies)
        })
    }
  }, [movieListSelection]);

  return (
    <React.Fragment>
      <ListDropdown setMovieListSelection={setMovieListSelection} />
      {moviesListData && (
        <React.Fragment>
          <ul className='movie-card-list'>
            {moviesListData.map((movie, index) =>
              <li key={index}><MovieCard title={movie.title} coverImg={movie.cover || movie.base64Cover} rating={movie.rating} year={movie.year} /></li>
            )}
          </ul>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default MoreMovies
