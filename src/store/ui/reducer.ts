import WalletActionTypes from 'store/wallet/actionTypes';
import { UIState, RequestStatus } from 'types';
import getUIReducer from './getUIReducer';

const initialState: UIState = {
  [WalletActionTypes.WALLETS_SIGN_BUY]: RequestStatus.INIT,
};

const uiReducer = getUIReducer(initialState);

export default uiReducer;
