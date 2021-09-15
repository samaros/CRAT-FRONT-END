/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionFn, NotificationModalState } from 'types';
import actionTypes from 'store/notificationModal/actionTypes';
import { tokensSetState } from 'store/tokens/actions';

type NotificationModalStateActionFn<F extends (...args: any) =>
any> = ActionFn<NotificationModalState, ReturnType<F>>;

const setState: NotificationModalStateActionFn<typeof tokensSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

export const NOTIFICATION_MODAL_ACTION = {
  [actionTypes.NOTIFICATION_MODAL_SET_STATE]: setState,
};
