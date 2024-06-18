import React, { useState } from 'react';

import NavBar from '../../components/Navbar/Navbar';
import MoreMovies from '../../components/MoreMovies/MoreMovies';
import FeaturedMovie from '../../components/FeaturedMovie/FeaturedMovie';
import AddMovieModal from '../../components/AddMovieModal/AddMovieModal';

import './Home.css';

const Home = () => {

  const [addMovieModalVisible, setAddMovieModalVisible] = useState(false);

  const addMovie = () => {
    setAddMovieModalVisible(!addMovieModalVisible);
  }

  const hideAddMovieModal = () => {
    setAddMovieModalVisible(false);
  }

  return (
    <div className='home'>
      {addMovieModalVisible && <AddMovieModal handleCloseClick={hideAddMovieModal} />}
      <NavBar handleAddMovieClick={addMovie} />
      <FeaturedMovie />
      <section className='movie-list-column'>
        <MoreMovies />
      </section>
    </div>
  );
};

export default Home