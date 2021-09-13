import { fork } from 'redux-saga/effects';

import getStage from './getStage';

export default function* stageSaga() {
  yield fork(getStage);
}
