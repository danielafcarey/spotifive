const updateAccessToken = (accessToken) => ({
  type: 'UPDATE_ACCESS_TOKEN',
  accessToken
})

const updateUser = (user) => ({
  type: 'UPDATE_USER',
  user
})

export {
  updateAccessToken,
  updateUser
}
