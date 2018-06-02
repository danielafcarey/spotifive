import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import * as apiCalls from '../apiCalls';
import * as cleaners from '../cleaner';

export function* listenForSubmitUpdateUser() {
  yield takeLatest('SUBMIT_UPDATE_USER', submitUpdateUser)
}

export function* submitUpdateUser({ accessToken }) {
  try {
    const rawUserData = yield call(apiCalls.getUserData, accessToken);
    const rawUserPlaylists = yield call(apiCalls.getUserPlaylists, accessToken);
    const cleanedUserData = yield call(cleaners.cleanUserData, rawUserData, rawUserPlaylists)
    yield put(actions.updateUser(cleanedUserData))
  } catch(error) {
    yield put(actions.updateUserError(error.message));
  }
}

export function* listenForSubmitUpdateSearch() {
  yield takeLatest('SUBMIT_UPDATE_SEARCH', submitUpdateSearch); 
}

export function* submitUpdateSearch({ searchString, accessToken }) {
  try {
    const rawSearchResults = yield call(apiCalls.getSearchResults, searchString, accessToken); 
    const cleanedSearchResults = yield call(cleaners.cleanSearchResults, rawSearchResults);
    yield put(actions.updateSearchResults(cleanedSearchResults));
  } catch(error) {
    yield put(actions.updateSearchError(error.message));
  }
}

export function* listenForSubmitUpdateArtist() {
  yield takeLatest('SUBMIT_UPDATE_ARTIST', submitUpdateArtist)
}

export function* submitUpdateArtist({ artistId, accessToken }) {
  try {
    const rawArtistData = yield call(apiCalls.getArtistData, artistId, accessToken);
    const rawTopTracks = yield call(apiCalls.getTopTracks, artistId, accessToken);
    const cleanedArtistData = yield call(cleaners.cleanArtistData, rawArtistData, rawTopTracks)
    yield put(actions.updateArtist(cleanedArtistData))
  } catch(error) {
    yield put(actions.updateArtistError(error.message))
  }
}

export function* listenForSubmitUpdateSpotifiveId() {
  yield takeLatest('SUBMIT_UPDATE_SPOTIFIVEID', submitUpdateSpotifiveId);
}

export function* submitUpdateSpotifiveId({ userId, accessToken }) {
  debugger;
  try {
    const spotifive = yield call(apiCalls.createSpotifive, userId, accessToken)
    console.log(spotifive);
    yield put(actions.updateSpotifiveId(spotifive.id))
  } catch(error) {
    yield put(actions.updateUserError(error.message));
  }
}
