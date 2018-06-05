const accessTokenReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_ACCESS_TOKEN':
      return action.accessToken;
    default:
      return state;
  }
};

export default accessTokenReducer;
