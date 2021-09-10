import { MetamaskStatus } from 'appConstants';
import {
  setWeb3ConnectAction,
  setWeb3ErrorAction,
  setWeb3ResetAction,
  setWeb3SuccessAction,
} from 'store/web3/actions';

export type Web3ConnectPayload1 = {
  address: string,
  status: MetamaskStatus,
};

export type Web3State = {
  status: MetamaskStatus,
  address?: string,
  whitelisted: boolean,
};

export type Web3ConnectAction = ReturnType<typeof setWeb3ConnectAction>;
export type Web3SuccessAction = ReturnType<typeof setWeb3SuccessAction>;
export type Web3ErrorAction = ReturnType<typeof setWeb3ErrorAction>;
export type Web3ResetAction = ReturnType<typeof setWeb3ResetAction>;

export type Web3Action =
  Web3ConnectAction
  | Web3ErrorAction
  | Web3SuccessAction
  | Web3ResetAction;
