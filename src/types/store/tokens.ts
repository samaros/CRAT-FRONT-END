export type Token = {
  symbol: string,
  address: string,
  decimals: number,
  price: string,
};

export type TokensState = {
  tokens: Token[],
} | {};
