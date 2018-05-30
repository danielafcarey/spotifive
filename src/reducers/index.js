import { combineReducers } from 'redux';
import accessToken from './accessTokenReducer';
import user from './userReducer';
import searchResults from './searchReducer';
import artist from './artistReducer';

export const rootReducer = combineReducers({
  accessToken, 
  user,
  searchResults,
  artist
})
