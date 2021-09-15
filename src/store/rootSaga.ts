import { fork } from 'redux-saga/effects';

import wallet from 'store/wallet/saga';
import tokens from 'store/tokens/saga';
import stage from 'store/stage/saga';

export default function* rootSaga() {
  yield fork(wallet);
  yield fork(tokens);
  yield fork(stage);
}
