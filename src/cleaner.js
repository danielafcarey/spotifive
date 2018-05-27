const getAccessToken = (url) => {
  const splitUrl = url.split('=');

  return splitUrl[1].split('&')[0];
}

export {
  getAccessToken,
}
