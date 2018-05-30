import artistReducer from './artistReducer';

describe('artistReducer', () => {

  it('returns default state if action type does not match', () => {
    const state = {
      artist: {},
      artistError: null
    }
    const action = {
      type: 'NOT_AN_ACTION',
      thing: 'a thing'
    }

    const expected = state;
    const result = artistReducer(state, action);

    expect(result).toEqual(expected);
  })


  it('returns new state when given an action of UPDATE_ARTIST', () => {
    const state = {
      artist: {},
      artistError: null
    }
    const action = {
      type: 'UPDATE_ARTIST',
      artist: { artistId: '123' }
    }

    const expected = {
      artist: action.artist,
      artistError: null
    }
    const result = artistReducer(state, action);

    expect(result).toEqual(expected);
  })

  it('returns new state when given an action of UPDATE_ARTIST_ERROR', () => {
    const state = {
      artist: {},
      artistError: null
    }
    const action = {
      type: 'UPDATE_ARTIST_ERROR',
      error: 'i failed'
    }

    const expected = {
      artist: {},
      artistError: action.error
    }
    const result = artistReducer(state, action);

    expect(result).toEqual(expected);
  })

})
