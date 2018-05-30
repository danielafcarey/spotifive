const initialState = {
  artist: {},
  artistError: null
}

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ARTIST':
      return { ...state, artist: action.artist };
    case 'UPDATE_ARTIST_ERROR':
      return { ...state, artistError: action.error };
    default:
      return state;
  }
}

export default artistReducer;
