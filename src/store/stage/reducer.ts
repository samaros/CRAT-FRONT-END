import { StageState } from 'types';
import { createReducer } from 'utils';
import { STAGE_ACTIONS } from 'store/stage/handlers';

const initialState: StageState = {
};

export default createReducer(initialState, STAGE_ACTIONS);
