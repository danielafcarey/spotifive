import React from 'react';

const ArtistSuggestions = ({ suggestions }) => {
  const optionList = suggestions.map((suggestion, i) => {
    return <option key={ i }>{ suggestion }</option>
  }).slice(0, 10);
  
  return (
    <datalist id="ArtistSuggestions">
      { optionList }
    </datalist>
  );
};

export default ArtistSuggestions;
