
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


export {
  getUserData
}
