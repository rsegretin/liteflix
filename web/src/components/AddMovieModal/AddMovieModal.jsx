import React, { useEffect, useState } from 'react';
import './AddMovieModal.css';
import { addUserMovie } from '../../services/userMovies';
import { resizeBase64 } from '../../helpers/imgResize';

const AddMovieModal = ({ handleCloseClick }) => {

  const [coverImage, setCoverImage] = useState(null);
  const [movieTitle, setMovieTitle] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [uploadSubstatus, setUploadSubstatus] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [uploadBarWidth, setUploadBarWidth] = useState(0);
  const [uploadingInProgress, setUploadingInProgress] = useState(false);

  useEffect(() => {
    setUploadSubstatus(`${uploadPercentage}%`);
    setUploadBarWidth((uploadPercentage * 6).toFixed(0));
  }, [uploadPercentage]);


  const handleStartUploadClick = async () => {

    if (!movieTitle || !coverImage) return;

    setUploadPercentage(30);
    setUploadingInProgress(true);
    setUploadStatus('Cargando');

    const newMovie = {
      title: movieTitle,
      coverImgb64: coverImage
    }

    const result = await addUserMovie(newMovie)

    setUploadPercentage(100);
  }

  const handleImgDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;

    if (files.length !== 1) return;

    resizeBase64(files[0], resizedImg => {
      setCoverImage(resizedImg);
    });
  }

  const handleMovieTitleChange = (event) => {
    setMovieTitle(event.target.value);
  }

  const handleUploadingActionClick = () => {
    // TODO
  }

  return (
    <div className='modal-container' >
      <div className='modal-box'>
        <button className='modal-close-btn' onClick={handleCloseClick}>x</button>
        <div className='modal-title'>Agregar película</div>
        {uploadingInProgress ?
          <div className='movie-upload-process'>
            <div className='movie-upload-status'>{uploadStatus} <span className='movie-upload-substatus'>{uploadSubstatus}</span></div>
            <div className='movie-upload-bar'>
              <hr className='movie-upload-bar-empty' />
              <hr className='movie-upload-bar-progress' style={{ width: `${uploadBarWidth}px` }} />
            </div>
            <button className='movie-upload-action' onClick={handleUploadingActionClick}></button>
          </div>
          :
          (coverImage === null) ?
            <div className='movie-img-drop' onDragOver={event => event.preventDefault()} onDrop={handleImgDrop}><span className='movie-img-drop-bold'>Agregá un archivo</span> o arrastralo y soltalo aquí</div>
            :
            <img className='movie-img-preview' src={coverImage} />
        }
        <div className='movie-upload-congrat'></div>
        <input
          className='movie-title-input'
          type='text'
          onChange={handleMovieTitleChange}
          placeholder='Título'
          disabled={uploadingInProgress}>
        </input>
        <button className={`upload-btn ${uploadingInProgress ? 'disabled' : 'enabled'}`} onClick={handleStartUploadClick}>Subir película</button>
      </div>
    </div>
  )
}

export default AddMovieModal
