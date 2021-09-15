import type { NotificationModalState, State } from 'types';

export default {
  getModalInfo: (state: State): NotificationModalState => state.notificationModal,
};
