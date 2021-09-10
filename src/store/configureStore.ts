/* eslint-disable */
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const web3PersistConfig = {
  key: 'web3',
  storage,
  whitelist: ['status'],
};

const reducers = {
  ...reducer,
  web3: persistReducer(web3PersistConfig, reducer.web3),
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
    __REDUX_DEVTOOLS_EXTENSION__: typeof compose;
  }
}

export default (initialState: { [key: string]: never } = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    window.__REDUX_DEVTOOLS_EXTENSION__ ||
    compose;

  const store = createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return { store, persistor };
};
