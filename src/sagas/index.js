import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import * as apiCalls from '../apiCalls';
import * as cleaners from '../cleaner';

export function* listenForSubmitUpdateUser() {
  yield takeLatest('SUBMIT_UPDATE_USER', submitUpdateUser)
}

export function* submitUpdateUser(action) {
  try {
    const rawUserData = yield call(apiCalls.getUserData, action.accessToken);
    const rawUserPlaylists = yield call(apiCalls.getUserPlaylists, action.accessToken);
    const cleanedUserData = yield call(cleaners.cleanUserData, rawUserData, rawUserPlaylists)
    yield put(actions.updateUser(cleanedUserData))
  } catch(error) {
    yield put(actions.updateUserError(error.message));
  }
}

export default listenForSubmitUpdateUser;
