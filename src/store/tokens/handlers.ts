/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionFn, TokensState } from 'types';
import actionTypes from 'store/tokens/actionTypes';
import { tokensSetState } from 'store/tokens/actions';

type TokensStateActionFn<F extends (...args: any) => any> = ActionFn<TokensState, ReturnType<F>>;

const setState: TokensStateActionFn<typeof tokensSetState> = (
  state,
  { payload },
) => ({
  ...state,
  data: payload,
});

export const TOKENS_ACTIONS = {
  [actionTypes.TOKENS_SET_STATE]: setState,
};
