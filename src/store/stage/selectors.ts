import type { State, StageState } from 'types';

export default {
  getStage: (state: State): StageState => state.stage,
};
