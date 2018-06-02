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

export function* listenForSubmitUpdateSearch() {
  yield takeLatest('SUBMIT_UPDATE_SEARCH', submitUpdateSearch); 
}

export function* submitUpdateSearch(action) {
  try {
    const rawSearchResults = yield call(apiCalls.getSearchResults, action.searchString, action.accessToken); 
    const cleanedSearchResults = yield call(cleaners.cleanSearchResults, rawSearchResults);
    yield put(actions.updateSearchResults(cleanedSearchResults));
  } catch(error) {
    yield put(actions.updateSearchError(error.message));
  }
}

export function* listenForSubmitUpdateArtist() {
  yield takeLatest('SUBMIT_UPDATE_ARTIST', submitUpdateArtist)
}

export function* submitUpdateArtist(action) {
  try {
    const rawArtistData = yield call(apiCalls.getArtistData, action.artistId, action.accessToken);
    const rawTopTracks = yield call(apiCalls.getTopTracks, action.artistId, action.accessToken);
    const cleanedArtistData = yield call(cleaners.cleanArtistData, rawArtistData, rawTopTracks)
    yield put(actions.updateArtist(cleanedArtistData))
  } catch(error) {
    yield put(actions.updateArtistError(error.message))
  }
}
