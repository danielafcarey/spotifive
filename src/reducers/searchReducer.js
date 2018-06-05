const initialState = {
  searchResults: [],
  searchError: null
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULTS':
      return { ...state, searchResults: action.searchResults };
    case 'UPDATE_SEARCH_ERROR':
      return { ...state, searchError: action.error };
    default:
      return state;
  }
};

export default searchReducer;
