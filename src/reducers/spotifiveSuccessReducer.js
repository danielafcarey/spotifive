const spotifiveSuccessReducer = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_SPOTIFIVE_SUCCESS':
      return action.message;
    default:
      return state;
  }
}

export default spotifiveSuccessReducer;
