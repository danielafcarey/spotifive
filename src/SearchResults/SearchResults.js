import React from 'react';
import Instructions from '../Instructions/Instructions';
import ArtistCard from '../ArtistCard/ArtistCard';

const SearchResults = (props) => {
  const { selectArtist } = props;
  const { searchResults } = props.searchResults;

  if (searchResults.length < 1) {
    return <Instructions />;
  } else {
    const listOfResults = searchResults.map((result, i) => {
      return (
        <ArtistCard 
          name={ result.name } 
          id={ result.id }
          image={ result.image }
          selectArtist={ selectArtist } 
          key={`artistKey${i}`}
        />     
      )
    })

    return (
      <div className='search-results'>
        <p>Select an artist: </p>
        <ul>
          { listOfResults }
        </ul>
      </div>
    )
  }

}

export default SearchResults;
