import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import detectEthereumProvider from '@metamask/detect-provider';
import {
  MetamaskStatus, Web3Event, MetamaskRequestMethod, routes,
} from 'appConstants';
import { setWeb3ConnectAction, setWeb3ResetAction } from 'store/web3/actions';
import { setNotification, history } from 'utils';
import { Provider } from 'types';

const useMetamask = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function takeMetamask() {
      const provider: Provider = await detectEthereumProvider();

      if (!provider || !provider.isMetaMask) {
        dispatch(setWeb3ConnectAction({
          status: MetamaskStatus.NOT_AVAILABLE,
          address: '',
        }));
        setNotification({
          type: 'error',
          title: 'Error',
          message: 'Please install the MetaMask extension',
        });

        // history.push(routes.auth.connect.root);
      }

      if (provider !== null) {
        const addresses: string[] = await provider.request({
          method: MetamaskRequestMethod.eth_accounts,
        });

        provider.on(Web3Event.accountsChanged, (addressesOtherAccount: string[]) => {
          if (addressesOtherAccount.length) {
            dispatch(setWeb3ConnectAction({
              status: MetamaskStatus.AVAILABLE,
              address: addressesOtherAccount[0],
            }));
            setNotification({
              type: 'success',
              title: 'Success',
              message: 'Account changed',
            });

            history.push(routes.main.root);
          } else {
            dispatch(setWeb3ConnectAction({
              status: MetamaskStatus.AVAILABLE,
              address: '',
            }));
            setNotification({
              type: 'error',
              title: 'Error',
              message: 'Account disabled',
            });

            // history.push(routes.auth.connect.root);
          }
        });

        provider.on(Web3Event.disconnect, () => {
          dispatch(setWeb3ResetAction());
          setNotification({
            type: 'error',
            title: 'Error',
            message: 'MetaMask was disconnected',
          });

          // history.push(routes.auth.connect.root);
        });

        if (!addresses.length) {
          dispatch(setWeb3ConnectAction({
            status: MetamaskStatus.NOT_AVAILABLE,
            address: '',
          }));

          return;
        }

        dispatch(setWeb3ConnectAction({
          status: MetamaskStatus.AVAILABLE,
          address: addresses[0],
        }));
      }
    }

    takeMetamask();
  }, []);
};

export default useMetamask;
