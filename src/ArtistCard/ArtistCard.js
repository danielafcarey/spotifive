import React from 'react';

const ArtistCard = ({ name, id, selectArtist }) => {
  return (
    <div 
      onClick={ () => selectArtist(id) }
    >
      <p>{ name }</p>    
    </div>
  )
}

export default ArtistCard;
