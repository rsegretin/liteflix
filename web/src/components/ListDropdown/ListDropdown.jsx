import React from 'react';
import './ListDropDown.css';
import { SELECTION_POPULAR, SELECTION_MY_MOVIES } from '../../helpers/const.js';

const ListDropdown = ({ setMovieListSelection }) => {

  const handleSelectChange = (event) => {
    setMovieListSelection(event.target.value);
  };

  return (
    <React.Fragment>
      <span>Ver:</span>
      <select className='list-view-options' onChange={handleSelectChange} >
        <option value={SELECTION_POPULAR}>Populares</option>
        <option value={SELECTION_MY_MOVIES}>Mis películas</option>
      </select>
    </React.Fragment>
  );

}

export default ListDropdown
