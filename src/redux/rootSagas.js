/* Effects */
import { all, call } from 'redux-saga/effects';
import { repoSagas } from './repo/saga';

import { userSearchSagas } from './userSearch/saga';
import { userReposSagas } from './userRepos/saga';

export default function* rootSagas() {
  // here we initialize all the sagas from different files
  yield all([call(userSearchSagas), call(userReposSagas), call(repoSagas)]);
}
