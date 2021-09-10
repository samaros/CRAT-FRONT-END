import type { State, Web3State } from 'types';

export default {
  getProp: <T extends keyof Web3State>(propKey: T) => (state: State) => state.web3[propKey],
  getWeb3: () => (state: State) => state.web3,
};
