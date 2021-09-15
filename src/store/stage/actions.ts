import actionTypes from 'store/stage/actionTypes';
import { StageState } from 'types/store/stage';

export const stageSetState = (payload: Partial<StageState>) => ({
  type: actionTypes.STAGE_SET_STATE,
  payload,
});

export const getStage = () => ({
  type: actionTypes.STAGE_GET_STAGE,
});
