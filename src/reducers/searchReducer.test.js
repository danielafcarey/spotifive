import searchReducer from './searchReducer';

describe('searchReducer', () => {

  it('returns default state if action type does not match', () => {
    const state = { searchError: null };
    const action = {
      type: 'I_AM_NOT_AN_ACTION',
      myWish: 'to be an action'
    }

    const expected = state;
    const result = searchReducer(state, action);

    expect(result).toEqual(expected);
  })

  it('returns new state if action type is UPDATE_SEARCH_RESULTS', () => {
    const state = { searchError: null };
    const action = {
      type: 'UPDATE_SEARCH_RESULTS',
      searchResults: ['music', 'i', 'like']
    }

    const expected = { 
      searchResults: action.searchResults,
      searchError: null 
    };
    const result = searchReducer(state, action);

    expect(result).toEqual(expected);
  })

  it('returns new state if action type is UPDATE_SEARCH_ERROR', () => {
    const state = { searchError: null };
    const action = {
      type: 'UPDATE_SEARCH_ERROR',
      error: 'i failed'
    }

    const expected = {
      searchError: 'i failed'
    }
    const result = searchReducer(state, action);

    expect(result).toEqual(expected);
  })

})
