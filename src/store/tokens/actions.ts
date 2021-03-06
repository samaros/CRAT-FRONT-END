import actionTypes from 'store/tokens/actionTypes';
import { Token } from 'types/store/tokens';

export const tokensSetState = (payload: Token[]) => ({
  type: actionTypes.TOKENS_SET_STATE,
  payload,
});

export const getTokens = () => ({
  type: actionTypes.TOKENS_GET_TOKENS,
});
