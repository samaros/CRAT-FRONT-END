import type { StateWithUIState } from '../../types';

export const getProp = (propKey: string) => (state: StateWithUIState) => state.ui[propKey];
export const getUI = (state: StateWithUIState) => state.ui;
