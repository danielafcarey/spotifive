import accessTokenReducer from './accessTokenReducer';

describe('accessTokenReducer', () => {

  it('returns default state if action type does not match', () => {
    const action = {
      type: 'FAKE_ACTION'
    }
    const state = '';
    const result = accessTokenReducer(state, action); 

    expect(result).toEqual(state);
  })

  it('returns new state if the action is UPDATE_ACCESS_TOKEN', () => {
    const action = {
      type: 'UPDATE_ACCESS_TOKEN',
      accessToken: 'iamaccesstoken'
    }
    const state = '';
    const result = accessTokenReducer(state, action);

    expect(result).toEqual(action.accessToken);
  })
})
