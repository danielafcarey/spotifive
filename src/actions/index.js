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


//updateArtist
const updateArtist = (artist) => ({
  type: 'UPDATE_ARTIST',
  artist
})

const updateArtistError = (error) => ({
  type: 'UPDATE_ARTIST_ERROR',
  error
})

const submitUpdateArtist = (artistName) => ({
  type: 'SUBMIT_UPDATE_ARTIST',
  artistName
})

export {
  updateAccessToken,
  updateUser,
  updateUserError,
  submitUpdateUser,
  updateArtist,
  updateArtistError,
  submitUpdateArtist
}
