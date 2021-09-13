import type { State, TokensState } from 'types';

export default {
  getWallet: (state: State): TokensState => state.tokens,
};
