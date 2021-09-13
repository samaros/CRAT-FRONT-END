import { WalletStatus } from 'appConstants';

export type WalletState = {
  address: string,
  status: WalletStatus,
  isWhitelisted: boolean,
};

export type CheckIsWhitelistedPayload = {
  address: string,
};

export type WhitelistPayload = CheckIsWhitelistedPayload & {
  email: string,
};

export type SignBuyPayload = {
  tokenAddress: string,
  amountToPay: string,
};
