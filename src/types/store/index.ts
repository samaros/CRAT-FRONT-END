import type { Location } from 'history';
import { WalletState } from 'types/store/wallet';
import { TokensState } from 'types/store/tokens';
import { StageState } from './stage';
import { NotificationModalState } from './notificationModal';

export * from './wallet';
export * from './tokens';
export * from './stage';
export * from './notificationModal';

export type State = {
  router: {
    location: Location,
  },

  wallet: WalletState,
  tokens: TokensState,
  stage: StageState,
  notificationModal: NotificationModalState,
};
