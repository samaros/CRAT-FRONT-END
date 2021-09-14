export type NotificationModalState = {
  isOpen: boolean,
  type: 'approve' | 'send' | '',
  result: 'success' | 'reject' | 'pending' | '',
};
