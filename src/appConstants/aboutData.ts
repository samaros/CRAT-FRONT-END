import {
  GoldBagPng,
  ArrowCoinsPng,
  ShieldPng,
  GobletPng,
  SuitcasePng,
  LockPng,
  PlanetPng,
} from 'assets/img';
import { AboutComponentType as Type } from 'types';

export const aboutData: Type[] = [
  {
    title: 'LIMITED SUPPLY:',
    body1: 'The total Token that will ever exist is 40 million tokens.',
    isRight: false,
    backgroundColor: 'yellow',
    image: GoldBagPng,
  },
  {
    title: 'MATURED SCARCITY',
    body1: 'only 40% of the Total Supply will be in circulation during the early years of CratD2C E-commerce trading activities, creating unprecedented scarcity for its ecosystem (Manufacturers, Consumers, Partners, Holders).',
    isRight: true,
    backgroundColor: 'green',
    image: ArrowCoinsPng,
  },
  {
    title: 'ONE MEANS OF EXCHANGE FOR CONSUMERS',
    body1: 'CRAT Token Is the only acceptable means of exchange on the CratD2C E-commerce Platform... The Consumer who is willing to buy goods at a cheaper rate directly from Manufacturers must have CRAT Token to complete his transaction.',
    body2: 'Consumers get rewarded on the platform with some CRAT Token for completing the transaction successfully.',
    isRight: false,
    backgroundColor: 'yellow',
    image: ShieldPng,
  },
  {
    title: 'MANUFACTURERS SAFE-HAVEN',
    body1: 'Manufacturers are free to list their products on the CratD2C E-Commerce Platform. For every successful transaction closed, the manufacturer gets rewarded with some CRAT Token. So he double wins on every deal close.',
    isRight: true,
    backgroundColor: 'yellow',
    image: GobletPng,
  },
  {
    title: 'CratD2C PARTNERS: ',
    body1: 'Partners are individuals willing to leverage the potential of "Sales-Purchase-Refer REWARD SYSTEM". A Partner gets CRAT Token for every Consumer he refers & complete transactions on the CratD2C E-commerce Platform.',
    isRight: false,
    backgroundColor: 'green',
    image: SuitcasePng,
  },
  {
    title: 'CRAT TOKEN HOLDERS SAFE-HAVEN: ',
    body1: 'The CratD2C Blockchain has a staking methodology built-in it (Every time someone sends a CRAT token, we give back 2.5% to all Token Holders) 5% transactions fee charged on every transaction on the Blockchain; 2.5% goes to CRAT Token Holders. In comparison, the remaining 2.5% goes to Manufacturers & Consumers trading on the CratD2C E-commerce Platform.',
    isRight: true,
    backgroundColor: 'yellow',
    image: LockPng,
  },
  {
    title: 'CRAT COMMUNITY EXCHANGE:',
    body1: 'At the launch of the CratD2C E-commerce Platform, there will be a community trading exchange before the public listing. Consumers can acquire CRAT Tokens to trade CratD2C E-commerce Platform.',
    body2: 'The Exchange Platform only will accept a minimum of Ask Value of $1+ per CRAT Token for the Bidders.',
    isRight: false,
    backgroundColor: 'green',
    image: PlanetPng,
  },
];
