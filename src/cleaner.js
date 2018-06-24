const getAccessToken = (url) => {
  const splitUrl = url.split('=');

  return splitUrl[1];
};

const cleanUserData = (userData, playlists) => {
  const spotifive = playlists.find(playlist => {
    return playlist.name === 'Spotifive';
  });

  return {
    userId: userData.id,
    name: userData.display_name,
    image: userData.images.length > 0 ? userData.images[0].url : null,
    spotifive: {
      spotifiveId: spotifive ? spotifive.id : null,
      link: spotifive ? spotifive.external_urls.spotify : null
    }
  };
};

const cleanSearchResults = (searchResults) => {
  const cleanedSearchResults = searchResults.artists.items.map(result => {
    const cleanResult = {
      name: result.name,
      id: result.id,
      image: result.images.length ? result.images[0].url : null
    };
    return cleanResult;
  });

  return cleanedSearchResults;
};

const cleanArtistData = (artistData, topTracks) => {
  const cleanedArtistData = {
    name: artistData.name,
    id: artistData.id,
    image: artistData.images.length ? artistData.images[0].url : null,
    topTracks: cleanTopTracks(topTracks.tracks)
  };

  return cleanedArtistData;
};

const cleanTopTracks = (topTracks) => {
  const cleanedTopTracks = topTracks.map(track => {
    return {
      name: track.name,
      uri: track.uri
    };
  }).splice(0, 5);

  return cleanedTopTracks;
};

export {
  getAccessToken,
  cleanUserData,
  cleanSearchResults,
  cleanArtistData,
  cleanTopTracks
};
