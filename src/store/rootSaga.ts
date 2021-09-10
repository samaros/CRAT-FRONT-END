import { fork } from 'redux-saga/effects';

import web3Saga from 'store/web3/saga';

export default function* rootSaga() {
  yield fork(web3Saga);
}
