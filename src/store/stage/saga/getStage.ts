/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { URL } from 'appConstants';
import { getStage, stageSetState } from 'store/stage/actions';
import actionTypes from 'store/stage/actionTypes';
import ajax from 'store/api/ajax';
import { camelCase, mapKeys } from 'lodash';
import { StageType } from 'types';

function* saga({ type }: ReturnType<typeof getStage>) {
  try {
    yield put(apiActions.request(type));

    const responseStage = yield call(ajax, {
      method: 'GET',
      url: URL.stage,
    });

    const responseStages = yield call(ajax, {
      method: 'GET',
      url: URL.stages,
    });

    const stageDataCamel = mapKeys(responseStage.data, (v, k) => camelCase(k));
    const stagesDataCamel = responseStages.data.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (el: any) => mapKeys(el, (v, k) => camelCase(k)),
    );
    yield put(stageSetState(stageDataCamel));
    yield put(stageSetState({
      stages: stagesDataCamel as StageType[],
    }));

    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.STAGE_GET_STAGE, saga);
}
