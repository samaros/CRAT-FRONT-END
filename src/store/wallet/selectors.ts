import type { State, WalletState } from 'types';

export default {
  getProp: <T extends keyof WalletState>(propKey: T) => (state: State) => state.wallet[propKey],
  getWallet: (state: State): WalletState => state.wallet,
};
