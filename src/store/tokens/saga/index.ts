import { fork } from 'redux-saga/effects';

import getTokens from './getTokens';

export default function* tokensSaga() {
  yield fork(getTokens);
}
