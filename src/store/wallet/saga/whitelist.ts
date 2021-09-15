import { call, put, takeLatest } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { URL } from 'appConstants';
import { walletSetState, whitelist } from 'store/wallet/actions';
import actionTypes from 'store/wallet/actionTypes';
import ajax from 'store/api/ajax';

function* saga({ type, payload }: ReturnType<typeof whitelist>) {
  const { address, email } = payload;
  try {
    yield put(apiActions.request(type));

    const response = yield call(ajax, {
      method: 'POST',
      url: URL.wallet.whitelist,
      data: {
        address,
        email,
      },
    });

    const { status } = response;
    if (status === 200) {
      yield put(walletSetState({
        isWhitelisted: true,
      }));
    }
    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.WALLETS_WHITELIST, saga);
}
