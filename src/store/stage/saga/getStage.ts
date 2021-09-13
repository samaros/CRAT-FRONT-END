/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { URL } from 'appConstants';
import { getStage, stageSetState } from 'store/stage/actions';
import actionTypes from 'store/stage/actionTypes';
import ajax from 'store/api/ajax';
import { camelCase, mapKeys } from 'lodash';

function* saga({ type }: ReturnType<typeof getStage>) {
  try {
    yield put(apiActions.request(type));

    const response = yield call(ajax, {
      method: 'GET',
      url: URL.stage,
    });

    const { data } = response;
    const dataCamel = mapKeys(data, (v, k) => camelCase(k));

    yield put(stageSetState(dataCamel));

    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.STAGE_GET_STAGE, saga);
}
