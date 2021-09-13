import { TokensState } from 'types';
import { createReducer } from 'utils';
import { TOKENS_ACTIONS } from 'store/tokens/handlers';

const initialState: TokensState = {
  tokens: [],
};

export default createReducer(initialState, TOKENS_ACTIONS);
