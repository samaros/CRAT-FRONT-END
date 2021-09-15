import BigNumber from 'bignumber.js';

export const getTokenAmount = (balance: string, decimals: number = 18): string => {
  if (balance === '') {
    return '0';
  }

  const displayValue = new BigNumber(balance).multipliedBy(new BigNumber(10).pow(decimals));
  return displayValue.toString(10);
};

export const getTokenAmountDisplay = (balance: string, decimals: number = 18): string => {
  if (balance === '') {
    return '0';
  }

  const displayValue = new BigNumber(balance).dividedBy(new BigNumber(10).pow(decimals));

  return displayValue.toString();
};
