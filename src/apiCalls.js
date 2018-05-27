
const getUserData = async (accessToken) => {
  const url = 'https://api.spotify.com/v1/me';
  const optionsObject = {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  };

  try {
    const response = await fetch(url, optionsObject);

    if (response.status === 200) {
      return await response.json();
    } else {
      throw Error('There was a problem signing in');
    }   
  } catch (error) {
    throw error;
  }
}

const getUserPlaylists = async (accessToken) => {
  const url = 'https://api.spotify.com/v1/me/playlists?limit=50';
  const optionsObject = {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  };
  try {
    const response = await fetch(url, optionsObject);
    if (response.status === 200) {
      const data = await response.json();
      return await getAllPlaylists(data.items, data.next, optionsObject);
    } else {
      throw Error(response.status)
    }
  } catch (error) {
    throw error
  }
}

const getAllPlaylists = async (prevPlaylists, nextPage, optionsObject) => {
  if (nextPage === null) {
    return prevPlaylists;
  }
  
  try {
    const response = await fetch(nextPage, optionsObject);
    if (response.status === 200) {
      const data = await response.json();
      const combinedPlaylists = [...data.items, ...prevPlaylists] 
      getAllPlaylists(combinedPlaylists, data.next, optionsObject)
    } else {
      throw Error(response.status)
    }
  } catch (error) {
    throw error
  }

}

export {
  getUserData,
  getUserPlaylists,
  getAllPlaylists
}
