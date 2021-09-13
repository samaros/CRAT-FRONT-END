import type { Location } from 'history';
import { WalletState } from 'types/store/wallet';
import { TokensState } from 'types/store/tokens';
import { StageState } from './stage';

export * from './wallet';
export * from './tokens';
export * from './stage';

export type State = {
  router: {
    location: Location,
  },

  wallet: WalletState,
  tokens: TokensState,
  stage: StageState,
};
