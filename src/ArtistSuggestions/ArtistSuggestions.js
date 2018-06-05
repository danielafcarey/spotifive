import React from 'react';
import { arrayOf, string } from 'prop-types';

const ArtistSuggestions = ({ suggestions }) => {
  const optionList = suggestions.map((suggestion, index) => {
    return <option key={ 'artist' + index }>{ suggestion }</option>;
  }).slice(0, 10);
  
  return (
    <datalist id="artist-suggestions">
      { optionList }
    </datalist>
  );
};

ArtistSuggestions.propTypes = {
  suggestions: arrayOf(string)
};

export default ArtistSuggestions;
