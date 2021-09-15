import actionTypes from 'store/notificationModal/actionTypes';
import { NotificationModalState } from 'types';

export const notificationModalSetState = (payload: NotificationModalState) => ({
  type: actionTypes.NOTIFICATION_MODAL_SET_STATE,
  payload,
});
