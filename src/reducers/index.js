import { combineReducers } from 'redux';
import accessToken from './accessTokenReducer';

export const rootReducer = combineReducers({
  accessToken, 
})
