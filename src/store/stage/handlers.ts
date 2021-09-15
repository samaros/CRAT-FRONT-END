/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionFn, StageState } from 'types';
import actionTypes from 'store/stage/actionTypes';
import { stageSetState } from 'store/stage/actions';

type StageStateActionFn<F extends (...args: any) => any> = ActionFn<StageState, ReturnType<F>>;

const setState: StageStateActionFn<typeof stageSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

export const STAGE_ACTIONS = {
  [actionTypes.STAGE_SET_STATE]: setState,
};
