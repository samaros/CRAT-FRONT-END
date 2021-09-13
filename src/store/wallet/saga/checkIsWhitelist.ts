import { call, put, takeLatest } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { URL } from 'appConstants';
import { checkIsWhitelisted, walletSetState } from 'store/wallet/actions';
import actionTypes from 'store/wallet/actionTypes';
import ajax from 'store/api/ajax';

function* saga({ type, payload }: ReturnType<typeof checkIsWhitelisted>) {
  const { address } = payload;
  try {
    yield put(apiActions.request(type));

    const response = yield call(ajax, {
      method: 'GET',
      url: URL.wallet.checkIsWhitelist(address),
      params: {
        address,
      },
    });
    const { data } = response;
    yield put(walletSetState({
      isWhitelisted: data,
    }));

    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.WALLETS_CHECK_IS_WHITELISTED, saga);
}
