import actionTypes from 'store/wallet/actionTypes';
import {
  CheckIsWhitelistedPayload, SignBuyPayload, WalletState, WhitelistPayload,
} from 'types';

export const walletSetState = (payload: Partial<WalletState>) => ({
  type: actionTypes.WALLETS_SET_STATE,
  payload,
});

export const connectMetamask = (payload: Partial<WalletState>) => ({
  type: actionTypes.WALLETS_METAMASK_CONNECT,
  payload,
});

export const whitelist = (payload: WhitelistPayload) => ({
  type: actionTypes.WALLETS_WHITELIST,
  payload,
});

export const signBuy = (payload: SignBuyPayload) => ({
  type: actionTypes.WALLETS_SIGN_BUY,
  payload,
});

export const checkIsWhitelisted = (payload: CheckIsWhitelistedPayload) => ({
  type: actionTypes.WALLETS_CHECK_IS_WHITELISTED,
  payload,
});

export const disconnectWallet = (payload?: Pick<WalletState, 'status'>) => ({
  type: actionTypes.WALLETS_DISCONNECT,
  payload,
});
