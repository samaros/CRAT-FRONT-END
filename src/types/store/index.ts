import type { Location } from 'history';
import { Web3State } from 'types/store/web3';

export * from './web3';

export type State = {
  router: {
    location: Location,
  },
  web3: Web3State,
};
