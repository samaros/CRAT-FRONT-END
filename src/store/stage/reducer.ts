import { StageState } from 'types';
import { createReducer } from 'utils';
import { STAGE_ACTIONS } from 'store/stage/handlers';

const initialState: StageState = {
  status: '',
  currentStagePriceUsd: 0,
  currentStageNumber: 0,
  currentStageDaysLeft: 0,
  currentStageTokensSold: 0,
  currentStageTokensLimit: 0,
  nextStagePriceUsd: 0,

};

export default createReducer(initialState, STAGE_ACTIONS);
