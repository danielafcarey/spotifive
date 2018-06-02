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
    case 'UPDATE_SPOTIFIVEID':
      const newUserInfo = { 
        ...state.userInfo, 
        spotifiveId: action.spotifiveId 
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
