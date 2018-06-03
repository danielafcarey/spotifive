const initialState = {
  loggedIn: false,
  userInfo: {},
  loginError: null
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { 
        ...state,
        loggedIn: true, 
        userInfo: action.user
      };
    case 'UPDATE_USER_ERROR':
      return { ...state, loginError: action.error } 
    case 'UPDATE_SPOTIFIVE':
      const newSpotifiveInfo = {
        spotifiveId: action.spotifiveId,
        link: action.link
      }
      const newUserInfo = { 
        ...state.userInfo, 
        spotifive: newSpotifiveInfo 
      }
      return {
        ...state,
        userInfo: newUserInfo
      }
    default:
      return state;
  }
}

export default userReducer;
