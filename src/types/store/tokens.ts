/* eslint-disable @typescript-eslint/no-explicit-any */
export type Token = {
  symbol: string,
  address: string,
  decimals: number,
  price: string,
  icon?: any,
};

export type TokensState = {
  data: Token[] | [],
};
