import { fork } from 'redux-saga/effects';

import setWeb3Connect from './setWeb3Connect';

export default function* web3Saga() {
  yield fork(setWeb3Connect);
}
