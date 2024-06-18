import React from 'react';

import './Navbar.css';

const Navbar = ({handleAddMovieClick}) => {

    return (
        <header className='navbar'>
            <div className='navbar-group navbar-left-group'>
                <div className='logo'>LITE<span>FLIX</span></div>
                <button className='add-movie-btn' onClick={handleAddMovieClick}>+ Agregar película</button>
            </div>
            <div className='navbar-group navbar-menu-group'>
                <button className='menu-btn'>líneas</button>
                <button className='bell-btn'>campana</button>
                <button className='profile-btn'>perfil</button>
            </div>
        </header>
    )
}

export default Navbar