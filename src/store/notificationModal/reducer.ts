import { NotificationModalState } from 'types';
import { createReducer } from 'utils';
import { NOTIFICATION_MODAL_ACTION } from 'store/notificationModal/handlers';

const initialState: NotificationModalState = {
  isOpen: false,
  type: '',
  result: '',
};

export default createReducer(initialState, NOTIFICATION_MODAL_ACTION);
