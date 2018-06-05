import React from 'react';
import { string, func, arrayOf, shape, object } from 'prop-types';
import Instructions from '../Instructions/Instructions';
import ArtistCard from '../ArtistCard/ArtistCard';

const SearchResults = (props) => {
  const { selectArtist } = props;
  const { searchResults } = props.searchResults;

  if (searchResults.length < 1) {
    return <Instructions />;
  } else {
    const listOfResults = searchResults.map((result, index) => {
      return (
        <ArtistCard 
          name={ result.name } 
          id={ result.id }
          image={ result.image }
          selectArtist={ selectArtist } 
          key={`artistKey${index}`}
        />     
      );
    });

    return (
      <div className='search-results'>
        <p>Select an artist: </p>
        <ul>
          { listOfResults }
        </ul>
      </div>
    );
  }
};

SearchResults.propTypes = {
  selectArtist: func,
  searchResults: shape({
    searchResults: arrayOf(object),
    searchError: string
  })
};

export default SearchResults;
