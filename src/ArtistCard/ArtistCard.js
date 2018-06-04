import React from 'react';
import { string, func } from 'prop-types';

const ArtistCard = ({ name, image, id, selectArtist }) => {
  const stockImage = require('../images/logo-grey.png');
  let showImage;

  image === null ? 
    showImage = stockImage : 
    showImage = image;

  return (
    <div 
      className='artist-card'
      onClick={ () => selectArtist(id) }
    >
      <img src={ showImage } alt={ name }/>
      <p>{ name }</p>    
    </div>
  )
}

ArtistCard.propTypes = {
  name: string,
  image: string,
  id: string,
  selectArtist: func
}

export default ArtistCard;
