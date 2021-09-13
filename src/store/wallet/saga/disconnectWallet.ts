/* eslint-disable no-underscore-dangle */
import { call, put, takeLatest } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { WalletStatus } from 'appConstants';
import { disconnectWallet, walletSetState } from 'store/wallet/actions';
import actionTypes from 'store/wallet/actionTypes';
import { Provider } from 'types';
import detectEthereumProvider from '@metamask/detect-provider';

function* disconnectWalletSaga({ type, payload }: ReturnType<typeof disconnectWallet>) {
  try {
    yield put(apiActions.request(type));

    const status = payload?.status;
    // @ts-ignore
    const provider: Provider = yield call(detectEthereumProvider);
    let updatedStatus;
    provider._events.disconnect();
    if (!status) {
      if (!provider || !provider.isMetaMask) {
        updatedStatus = WalletStatus.NOT_AVAILABLE;
      }
    }

    yield put(walletSetState({
      address: '',
      status: status || updatedStatus,
    }));

    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.WALLETS_DISCONNECT, disconnectWalletSaga);
}
