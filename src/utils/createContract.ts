import { AbiItem } from 'web3-utils';
import { getWeb3 } from '.';

export const createContract = async (address: string, abi: AbiItem[]) => {
  const web3 = await getWeb3();
  const contract = new web3.eth.Contract(abi, address);
  return contract;
};
