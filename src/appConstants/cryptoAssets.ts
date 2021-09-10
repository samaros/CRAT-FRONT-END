import {
  bnb, weth, usdt, btc, crat,
} from 'assets/img';
import { CryptoAssetsType } from 'types';

export const cryptoAssets: CryptoAssetsType[] = [
  {
    icon: weth,
    label: 'weth',
    rate: '3985,57',
    value: '0x1231231231njk31892yfh917g1297gf9g9819hdosa1',
  },
  {
    icon: usdt,
    label: 'usdt',
    rate: '0.99',
    value: '0x1231231231njk31892yfh917g1297gf9g9819hdosa2',
  },
  {
    icon: bnb,
    label: 'bnb',
    rate: '506,45',
    value: '0x1231231231njk31892yfh917g1297gf9g9819hdosa3',
  },
  {
    icon: btc,
    label: 'btcb',
    rate: '48000.32',
    value: '0x1231231231njk31892yfh917g1297gf9g9819hdosa4',
  },
];

export const cratToken = {
  icon: crat,
  label: 'crat',
  rate: '0,00',
  value: '0x1231231231njk31892yfh917g1297gf9g9819hdosashit',
};
