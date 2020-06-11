import axios from 'axios';
import { LOAD_DATA_REQUEST } from './types';

import { put, takeLatest, all, delay } from 'redux-saga/effects';
import { loadDataFailure, loadDataSuccess } from '../../actions';

function* getUser({ username }) {
  try {
    const dados = yield axios.get(`https://api.github.com/users/${username}`/*, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ba958f09e0d9bbf8d3f9dc1daa59d87f91c48313'
      }
    }*/);
    yield delay(700);

    yield put(loadDataSuccess([dados.data]));
  } catch (error) {
    yield put(loadDataFailure(error.response));
  }
}

function* actionWatcher() {
  yield takeLatest(LOAD_DATA_REQUEST, getUser);
}

export function* userSearchSagas() {
  yield all([actionWatcher()]);
}
