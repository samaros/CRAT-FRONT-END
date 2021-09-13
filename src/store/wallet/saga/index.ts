import { fork } from 'redux-saga/effects';

import connectMetamaskSaga from './connectMetamask';
import disconnectWalletSaga from './disconnectWallet';
import checkIsWhitelisted from './checkIsWhitelist';
import whitelist from './whitelist';

export default function* walletsSaga() {
  yield fork(connectMetamaskSaga);
  yield fork(disconnectWalletSaga);
  yield fork(checkIsWhitelisted);
  yield fork(whitelist);
}
