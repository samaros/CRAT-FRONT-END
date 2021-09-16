/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import detectEthereumProvider from '@metamask/detect-provider';
import {
  WalletStatus, Web3Event, MetamaskRequestMethod, chainId as bscChainId,
} from 'appConstants';
import { connectMetamask, disconnectWallet } from 'store/wallet/actions';
import { setNotification } from 'utils';
import { Provider } from 'types';

const useMetamask = (isSkip?: boolean): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function takeMetamask() {
      const provider: Provider = await detectEthereumProvider();
      if (!provider || !provider.isMetaMask) {
        dispatch(disconnectWallet());
        setNotification({
          type: 'error',
          title: 'Error',
          message: 'Please install the MetaMask extension',
        });
      }

      if (provider) {
        const addresses: string[] = await provider.request({
          method: MetamaskRequestMethod.eth_accounts,
        });

        const chainId: string[] = await provider.request({
          method: MetamaskRequestMethod.eth_chainId,
        });

        if (chainId[0] !== bscChainId) {
          setNotification({
            type: 'error',
            title: 'Error',
            message: 'Change to BSC testnet',
          });
        }

        provider.on(Web3Event.accountsChanged, (addressesOtherAccount: string[]) => {
          if (addressesOtherAccount.length) {
            const address = addressesOtherAccount[0];
            dispatch(connectMetamask({
              status: WalletStatus.AVAILABLE,
              address,
            }));

            setNotification({
              type: 'success',
              title: 'Success',
              message: 'Wallet connected',
            });
          } else {
            dispatch(disconnectWallet({
              status: WalletStatus.AVAILABLE,
            }));
            setNotification({
              type: 'error',
              title: 'Error',
              message: 'Account disabled',
            });
          }
        });

        provider.on(Web3Event.chainChanged, (chainIdLocal: string) => {
          if (chainIdLocal !== bscChainId) {
            setNotification({
              type: 'error',
              title: 'Error',
              message: 'Change to BSC testnet',
            });
          }
        });

        provider.on(Web3Event.disconnect, () => {
          dispatch(disconnectWallet());
          setNotification({
            type: 'error',
            title: 'Error',
            message: 'MetaMask was disconnected',
          });
        });

        if (!addresses.length) {
          dispatch(disconnectWallet({
            status: WalletStatus.NOT_AVAILABLE,
          }));

          return;
        }

        dispatch(connectMetamask({
          status: WalletStatus.AVAILABLE,
          address: addresses[0],
        }));
      }

      return provider;
    }

    if (!isSkip) takeMetamask();
  }, [isSkip]);
};

export default useMetamask;
