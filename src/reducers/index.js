import { combineReducers } from 'redux';
import accessToken from './accessTokenReducer';
import user from './userReducer';
import searchResults from './searchReducer';
import artist from './artistReducer';
import spotifiveSuccess from './spotifiveSuccessReducer';

export const rootReducer = combineReducers({
  accessToken, 
  user,
  searchResults,
  artist,
  spotifiveSuccess
})
