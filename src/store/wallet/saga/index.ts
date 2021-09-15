import { fork } from 'redux-saga/effects';

import connectMetamaskSaga from './connectMetamask';
import disconnectWalletSaga from './disconnectWallet';
import checkIsWhitelisted from './checkIsWhitelist';
import whitelist from './whitelist';
import getCratBalance from './getCratBalance';
import approveTokensSpend from './approveTokensSpend';
import signBuy from './signBuy';

export default function* walletsSaga() {
  yield fork(connectMetamaskSaga);
  yield fork(disconnectWalletSaga);
  yield fork(checkIsWhitelisted);
  yield fork(whitelist);
  yield fork(getCratBalance);
  yield fork(approveTokensSpend);
  yield fork(signBuy);
}
