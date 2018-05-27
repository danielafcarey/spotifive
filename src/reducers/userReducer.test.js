import userReducer from './userReducer';

describe('userReducer', () => {

  it('returns default state if action type does not match', () => {
    const action = {
      type: 'I_AM_FAKE',
    }
    const state = {};
    const result = userReducer(state, action);

    expect(result).toEqual(state);
  })

  it('returns new state if action is UPDATE_USER', () => {
    const action = {
      type: 'UPDATE_USER',
      user: { userId: 1 }
    }
    const state = '';
    const result = userReducer(state, action);

    expect(result).toEqual(action.user);
  })
})
