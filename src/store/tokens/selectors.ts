import type { State, TokensState } from 'types';

export default {
  getTokens: (state: State): TokensState => state.tokens,
};
