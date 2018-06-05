
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
};

const getUserPlaylists = async (accessToken) => {
  const url = 'https://api.spotify.com/v1/me/playlists?limit=50';
  const optionsObject = {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  };
  const response = await fetch(url, optionsObject);

  if (response.status === 200) {
    const data = await response.json();
    const { items, next } = data;
    const allPlaylists = await getAllPlaylists(items, next, optionsObject);
    return allPlaylists;
  } else {
    throw Error('There was a problem fetching your playlists');
  }
};

const getAllPlaylists = async (prevPlaylists, nextPage, optionsObject) => {
  if (nextPage === null) {
    return prevPlaylists;
  }
  const response = await fetch(nextPage, optionsObject);

  if (response.status === 200) {
    const data = await response.json();
    const combinedPlaylists = [...data.items, ...prevPlaylists]; 
    return getAllPlaylists(combinedPlaylists, data.next, optionsObject);
  } else {
    throw Error('There was a problem fetching your playlists');
  }
};

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
    throw Error('There was a problem. Please try again.');
  }
}; 

const getArtistData = async (artistId, accessToken) => {
  const url = `https://api.spotify.com/v1/artists/${artistId}`;
  const optionsObject = {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  };

  const response = await fetch(url, optionsObject);

  if (response.status === 200) {
    return await response.json();
  } else {
    throw Error('There was a problem getting that artist.');
  }
};

const getTopTracks = async (artistId, accessToken) => {
  const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`;
  const optionsObject = {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  };
  const response = await fetch(url, optionsObject);

  if (response.status === 200) {
    return await response.json();
  } else {
    throw Error('There was a problem getting artists top tracks.');
  }
};

const createSpotifive = async (userId, accessToken) => {
  const playlistBody = {
    name: 'Spotifive',
    description: 'Check out this new music!'
  };
  const optionsObject = {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${accessToken}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(playlistBody)
  };
  const url = `https://api.spotify.com/v1/users/${userId}/playlists`; 
  const response = await fetch(url, optionsObject);

  if (response.status < 300) {
    return await response.json();
  } else {
    throw Error('Oops! There was a problem authorizing your account.');
  } 
};

const addTracks = async (userId, spotifiveId, topTracks, accessToken) => {
  const url = `https://api.spotify.com/v1/users/${userId}/playlists/${spotifiveId}/tracks`; 
  const topTrackUris = topTracks.map(track => track.uri);
  const addTracksBody = {
    uris: topTrackUris 
  };
  const optionsObject = {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${accessToken}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(addTracksBody)
  };

  try {
    const response = await fetch(url, optionsObject);

    if (response.status === 201) {
      return response;
    } else {
      throw Error(
        'Oops! There was a problem adding these songs. Please try again.'
      );
    }
  } catch (error) {
    throw error;
  }
};

export {
  getUserData,
  getUserPlaylists,
  getAllPlaylists,
  getSearchResults,
  getArtistData,
  getTopTracks,
  createSpotifive,
  addTracks
};
