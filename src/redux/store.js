import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
//Import rootSagas and createMiddleware function
import rootSagas from './rootSagas';
import createSagaMiddleware from 'redux-saga';

// Import reducers
import User from './user/reducer';
import repo from './repo/reducer';
import userSearch from './userSearch/reducer';

const rootReducers = combineReducers({ User, userSearch, repo });

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Trying to use redux extension

sagaMiddleware.run(rootSagas);

let store = createStore(
  rootReducers,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware)) //using redux compose so we can use both applyMiddleware and devtools extension
);

export default store;
