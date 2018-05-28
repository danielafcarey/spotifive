import { createStore } from 'redux';
import { rootReducer } from './index.js';
import accessToken from './accessTokenReducer';
import user from './userReducer';

describe('reducers', () => {
  it('creates initial state', () => {
    let store = createStore(rootReducer)

    expect(store.getState().accessToken).toEqual(accessToken(undefined, ''))
    expect(store.getState().user).toEqual(user(undefined, {}))
  })
})
