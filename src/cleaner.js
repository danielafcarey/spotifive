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

const cleanArtistData = (artistData) => {

}

export {
  getAccessToken,
  cleanUserData,
  cleanArtistData
}
