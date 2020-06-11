import axios from 'axios';
import { LOAD_USER_REPOS } from './types';

import { put, takeLatest, all } from 'redux-saga/effects';
import { loadUserReposFailure, loadUserReposSuccess } from '../../actions';

function* getUserRepos({ payload }) {
  try {
    console.log(payload)
    const dados = yield axios.get(payload);
    console.log(dados)

    yield put(loadUserReposSuccess(dados.data));
  } catch (error) {
    yield put(loadUserReposFailure(error.response));
  }
}

function* actionWatcher() {
  yield takeLatest(LOAD_USER_REPOS, getUserRepos);
}

export function* userReposSagas() {
  yield all([actionWatcher()]);
}
