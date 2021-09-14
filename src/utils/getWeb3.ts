import Web3 from 'web3';

export const getWeb3 = async () => {
  const web3 = new Web3(Web3.givenProvider);
  return web3;
};
