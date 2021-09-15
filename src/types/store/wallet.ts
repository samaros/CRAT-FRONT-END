import { WalletStatus } from 'appConstants';

export type WalletState = {
  address: string,
  status: WalletStatus,
  isWhitelisted: boolean,
  cratBalance: number,
};

export type CheckIsWhitelistedPayload = {
  address: string,
};

export type WhitelistPayload = CheckIsWhitelistedPayload & {
  email: string,
};

export type SignBuyPayload = {
  address: string,
  amount: string,
  decimals: string
};
