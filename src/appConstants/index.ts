import BigNumber from 'bignumber.js';

export { default as routes } from './routes';
export * from './enums';
export * from './headerLinks';
export * from './iconLinks';
export * from './aboutData';
export * from './cryptoAssets';
export * from './importantAddresses';
export * from './roadMap';
export * from './resCodes';
export * from './contracts';
export { default as URL } from './url';

export const MAX_UINT_256 = new BigNumber('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
export const bnbMaskAddress = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
