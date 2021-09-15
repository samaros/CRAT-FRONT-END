import { WalletState } from 'types';
import { WalletStatus } from 'appConstants';
import { createReducer } from 'utils';
import { WALLETS_ACTIONS } from 'store/wallet/handlers';

const initialState: WalletState = {
  address: '',
  status: WalletStatus.NOT_AVAILABLE,
  isWhitelisted: false,
  cratBalance: 0,
};

export default createReducer(initialState, WALLETS_ACTIONS);
