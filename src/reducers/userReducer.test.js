import userReducer from './userReducer';

describe('userReducer', () => {

  it('returns default state if action type does not match', () => {
    const action = {
      type: 'I_AM_FAKE',
    }
    const state = { 
      loggedIn: false,
      userInfo: {},
      loginError: null
    };
    const result = userReducer(state, action);

    expect(result).toEqual(state);
  })

  it('returns new state if action is UPDATE_USER', () => {
    const action = {
      type: 'UPDATE_USER',
      user: { userId: 1 }
    }
    const state = { 
      loggedIn: false,
      userInfo: {},
      loginError: null
    };
    const expected = {
      loggedIn: true,
      userInfo: action.user,
      loginError: null
    }
    const result = userReducer(state, action);

    expect(result).toEqual(expected);
  })

  it('returns new state if action is UPDATE_USER_ERROR', () => {
    const action = {
      type: 'UPDATE_USER_ERROR',
      error: 'i failed'
    };
    const state = { 
      loggedIn: false,
      userInfo: {},
      loginError: null
    };
    const expected = {
      loggedIn: false,
      userInfo: {},
      loginError: 'i failed'
    }
    const result = userReducer(state, action);

    expect(result).toEqual(expected);
  })

  it('returns new state if action is UPDATE_SPOTIFIVEID', () => {
    const action = {
      type: 'UPDATE_SPOTIFIVEID',
      spotifiveId: '123'
    }
    const state = {
      loggedIn: true,
      userInfo: {
        spotifiveId: null
      },
      loginError: null
    }
    const expected = {
      loggedIn: true,
      userInfo: {
        spotifiveId: '123' 
      },
      loginError: null
    }
    const result = userReducer(state, action);

    expect(result).toEqual(expected);
  })

})
