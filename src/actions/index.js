//updateAccessToken
const updateAccessToken = (accessToken) => ({
  type: 'UPDATE_ACCESS_TOKEN',
  accessToken
})


//updateUser
const updateUser = (user) => ({
  type: 'UPDATE_USER',
  user
})

const updateUserError = (error) => ({
  type: 'UPDATE_USER_ERROR',
  error
})

const submitUpdateUser = (accessToken) => ({
  type: 'SUBMIT_UPDATE_USER',
  accessToken
})

const submitUpdateSpotifiveId = (accessToken) => ({
  type: 'SUBMIT_UPDATE_SPOTIFIVEID',
  accessToken
})

const updateSpotifiveId = (spotifiveId) => ({
  type: 'UPDATE_SPOTIFIVEID',
  spotifiveId
})


//updateSearchResults
const updateSearchResults = (searchResults) => ({
  type: 'UPDATE_SEARCH_RESULTS',
  searchResults
})

const updateSearchError = (error) => ({
  type: 'UPDATE_SEARCH_ERROR',
  error
})

const submitUpdateSearch = (searchString, accessToken) => ({
  type: 'SUBMIT_UPDATE_SEARCH',
  searchString,
  accessToken
})


//updateArtist
const updateArtist = (artist) => ({
  type: 'UPDATE_ARTIST',
  artist
})

const updateArtistError = (error) => ({
  type: 'UPDATE_ARTIST_ERROR',
  error
})

const submitUpdateArtist = (artistId, accessToken) => ({
  type: 'SUBMIT_UPDATE_ARTIST',
  artistId,
  accessToken
})

export {
  updateAccessToken,
  updateUser,
  updateUserError,
  submitUpdateUser,
  submitUpdateSpotifiveId,
  updateSpotifiveId,
  updateSearchResults,
  updateSearchError,
  submitUpdateSearch,
  updateArtist,
  updateArtistError,
  submitUpdateArtist
}
