import { createStore } from 'redux';
import { rootReducer } from './index.js';
import accessToken from './accessTokenReducer';
import user from './userReducer';
import searchResults from './searchReducer';
import artist from './artistReducer';

describe('reducers', () => {
  it('creates initial state', () => {
    let store = createStore(rootReducer)

    expect(store.getState().accessToken).toEqual(accessToken(undefined, ''))
    expect(store.getState().user).toEqual(user(undefined, {}))
    expect(store.getState().searchResults).toEqual(searchResults(undefined, {}))
    expect(store.getState().artist).toEqual(artist(undefined, {}))

  })
})
