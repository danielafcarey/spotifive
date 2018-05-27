import { combineReducers } from 'redux';
import accessToken from './accessTokenReducer';
import user from './userReducer';

export const rootReducer = combineReducers({
  accessToken, 
  user
})
