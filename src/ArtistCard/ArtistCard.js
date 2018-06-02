import React from 'react';

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
      <img src={ showImage } />
      <p>{ name }</p>    
    </div>
  )
}

export default ArtistCard;
