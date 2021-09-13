import actionTypes from 'store/tokens/actionTypes';
import { TokensState } from 'types/store/tokens';

export const tokensSetState = (payload: Partial<TokensState>) => ({
  type: actionTypes.TOKENS_SET_STATE,
  payload,
});

export const getTokens = () => ({
  type: actionTypes.TOKENS_GET_TOKENS,
});
