
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

export {
  getUserData,
  getUserPlaylists,
  getAllPlaylists
}
