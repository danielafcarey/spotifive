import spotifiveSuccessReducer from './spotifiveSuccessReducer';

describe('spotifiveSuccessReducer', () => {

  it('returns previous state if action does not match', () => {
    const expected = false;
    const mockAction = {
      type: 'NOT_AN_ACTION',
      message: false
    };
    const state = false;
    const result = spotifiveSuccessReducer(state, mockAction);

    expect(result).toEqual(expected);
  })

  it('returns new state if action type is UPDATE_SPOTIFIVE_SUCCESS', () => {
    const expected = true;
    const mockAction = {
      type: 'UPDATE_SPOTIFIVE_SUCCESS',
      message: true
    };
    const state = false;
    const result = spotifiveSuccessReducer(state, mockAction)

    expect(result).toEqual(expected);
  })
})
