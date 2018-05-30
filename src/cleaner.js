const getAccessToken = (url) => {
  const splitUrl = url.split('=');

  return splitUrl[1].split('&')[0];
}

const cleanUserData = (userData, playlists) => {
  const spotifive = playlists.find(playlist => {
    return playlist.name === 'Spotifive'
  });

  return {
    userId: userData.id,
    name: userData.display_name,
    image: userData.images[0].url,
    spotifiveId: spotifive ? spotifive.id : null
  } 
}

const cleanSearchResults = (searchResults) => {
  const cleanedSearchResults = searchResults.artists.items.map(result => {
    const cleanResult = {
      name: result.name,
      id: result.id,
      image: result.images.length ? result.images[0].url : null
    }
    return cleanResult;
  })

  return cleanedSearchResults;
}

const cleanArtistData = (artistData) => {

}

export {
  getAccessToken,
  cleanUserData,
  cleanSearchResults,
  cleanArtistData
}
