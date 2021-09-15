import { Action as ActionRedux } from 'redux';

export type ActionFn<T, U> = (
  state: Readonly<T>,
  action: ActionRedux<string> & U
) => Readonly<T>;

export type Action<T, P = void, M = void> = { type: T, payload?: P | void, meta?: M };
