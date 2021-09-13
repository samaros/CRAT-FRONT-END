import { call, put, takeLatest } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { URL } from 'appConstants';
import { signBuy } from 'store/wallet/actions';
import actionTypes from 'store/wallet/actionTypes';
import ajax from 'store/api/ajax';

function* saga({ type, payload }: ReturnType<typeof signBuy>) {
  const { tokenAddress, amountToPay } = payload;
  try {
    yield put(apiActions.request(type));

    yield call(ajax, {
      method: 'post',
      url: URL.wallet.signBuy,
      params: {
        token_address: tokenAddress,
        amount_to_pay: amountToPay,
      },
    });

    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.WALLETS_SIGN_BUY, saga);
}
