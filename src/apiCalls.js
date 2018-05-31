
const getUserData = async (accessToken) => {
  const url = 'https://api.spotify.com/v1/me';
  const optionsObject = {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  };
  const response = await fetch(url, optionsObject);

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    throw Error('Please sign in again'); 
  } else {
    throw Error('There was a problem signing in');
  }   

}

const getUserPlaylists = async (accessToken) => {
  const url = 'https://api.spotify.com/v1/me/playlists?limit=50';
  const optionsObject = {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  };
  const response = await fetch(url, optionsObject);

  if (response.status === 200) {
    const data = await response.json();
    const allPlaylists = await getAllPlaylists(data.items, data.next, optionsObject)
    return allPlaylists
  } else {
    throw Error('There was a problem fetching your playlists')
  }
}

const getAllPlaylists = async (prevPlaylists, nextPage, optionsObject) => {
  if (nextPage === null) {
    return prevPlaylists;
  }
  const response = await fetch(nextPage, optionsObject);

  if (response.status === 200) {
    const data = await response.json();
    const combinedPlaylists = [...data.items, ...prevPlaylists] 
    return getAllPlaylists(combinedPlaylists, data.next, optionsObject)
  } else {
    throw Error('There was a problem fetching your playlists')
  }
}

const getSearchResults = async (searchString, accessToken) => {
  const searchQuery = searchString.split(' ').join('+');
  const url = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&limit=5`;
  const optionsObject = {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  };
  const response = await fetch(url, optionsObject);

  if (response.status === 200) {
    return await response.json();
  } else {
    throw Error('There was a problem. Please try again.')
  }
} 

const getArtistData = async (artistId, accessToken) => {
  const url = `https://api.spotify.com/v1/artists/${artistId}`
  const optionsObject = {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  };

  const response = await fetch(url, optionsObject);

  if (response.status === 200) {
    return await response.json();
  } else {
    throw Error('There was a problem getting that artist.');
  }
}

const getTopTracks = async (artistId, accessToken) => {
  const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`
  const optionsObject = {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  };
  const response = await fetch(url, optionsObject);

  if (response.status === 200) {
    return await response.json();
  } else {
    throw Error('There was a problem getting artists top tracks.')
  }
}

export {
  getUserData,
  getUserPlaylists,
  getAllPlaylists,
  getSearchResults,
  getArtistData,
  getTopTracks
}
