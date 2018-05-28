import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import * as apiCalls from '../apiCalls';

export function* listenForSubmitUpdateUser() {
  yield takeLatest('SUBMIT_UPDATE_USER', submitUpdateUser)
}

export function* submitUpdateUser(action) {
  try {
    const rawUserData = yield call(apiCalls.getUserData, action.accessToken);
    const rawUserPlaylists = yield call(apiCalls.getUserPlaylists, action.accessToken);
    const cleanUserData = yield call(cleaner.cleanUserData(rawUserData, rawUserPlaylists))
    yield put(actions.updateUser(cleanedUserData))
  } catch(error) {

  }
}

export default listenForSubmitUpdateUser;
