const initialState = {
  loggedIn: false,
  userInfo: {},
  loginError: null
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { loggedIn: true, userInfo: action.user };
    case 'UPDATE_USER_ERROR':
      return { ...state, loginError: action.error } 
    default:
      return state;
  }
}

export default userReducer;
