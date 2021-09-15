export enum RequestStatus {
  INIT = 'INIT',
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  RESET = 'RESET',
}

export type UIState = Record<string, RequestStatus>;

export type StateWithUIState<P = Record<string, unknown>> = {
  ui: UIState,
} & P;
