/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { URL } from 'appConstants';
import { getTokens, tokensSetState } from 'store/tokens/actions';
import actionTypes from 'store/tokens/actionTypes';
import ajax from 'store/api/ajax';

function* saga({ type }: ReturnType<typeof getTokens>) {
  try {
    yield put(apiActions.request(type));

    const response = yield call(ajax, {
      method: 'GET',
      url: URL.tokens,
    });
    const { data } = response;
    console.log(data, 13123);

    yield put(tokensSetState(data));

    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.TOKENS_GET_TOKENS, saga);
}
