/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionFn, WalletState } from 'types';
import actionTypes from 'store/wallet/actionTypes';
import { walletSetState } from 'store/wallet/actions';

type WalletsStateActionFn<F extends (...args: any) => any> = ActionFn<WalletState, ReturnType<F>>;

const setState: WalletsStateActionFn<typeof walletSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

export const WALLETS_ACTIONS = {
  [actionTypes.WALLETS_SET_STATE]: setState,
};
