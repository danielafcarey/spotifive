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

const submitUpdateArtist = (artistId) => ({
  type: 'SUBMIT_UPDATE_ARTIST',
  artistId
})

export {
  updateAccessToken,
  updateUser,
  updateUserError,
  submitUpdateUser,
  updateSearchResults,
  updateSearchError,
  submitUpdateSearch,
  updateArtist,
  updateArtistError,
  submitUpdateArtist
}
