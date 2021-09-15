import { put, takeLatest } from 'redux-saga/effects';
import { WalletStatus } from 'appConstants';
import { connectMetamask, walletSetState, disconnectWallet } from 'store/wallet/actions';
import actionTypes from 'store/wallet/actionTypes';

function* connectMetamaskSaga({ payload }: ReturnType<typeof connectMetamask>) {
  try {
    const { address, status } = payload;

    if (status === WalletStatus.AVAILABLE) {
      yield put(walletSetState({
        status: address ? WalletStatus.CONNECTED : WalletStatus.AVAILABLE,
        address,
      }));
    } else {
      yield put(walletSetState({
        status,
        address,
      }));
    }
  } catch (err) {
    yield put(disconnectWallet());
    console.log(err);
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.WALLETS_METAMASK_CONNECT, connectMetamaskSaga);
}
