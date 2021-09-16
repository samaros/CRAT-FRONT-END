/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ToastContainer } from 'react-toastify';
import detectEthereumProvider from '@metamask/detect-provider';
import { useMetamask } from 'hooks';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { connectMetamask } from 'store/wallet/actions';
import { MetamaskRequestMethod, WalletStatus } from 'appConstants';
import { Provider } from 'types';
import Routes from '../Routes';

const App = () => {
  const dispatch = useDispatch();
  async function handleEthereum() {
    const { ethereum } = window;
    if (ethereum && ethereum.isMetaMask) {
      console.log('TRY 2');
      // const provider: Provider = await detectEthereumProvider();

      // const addresses: string[] = await provider.request({
      //   method: MetamaskRequestMethod.eth_accounts,
      // });

      dispatch(connectMetamask({
        status: WalletStatus.AVAILABLE,
        address: '0x1323D9cCD5F5d1c27FfeA5F75AAC3780D4658dCf',
      }));
    } else {
      console.log('Please install MetaMask!');
    }
  }
  if (window.ethereum) {
    handleEthereum();
  } else {
    window.addEventListener('ethereum#initialized', handleEthereum, {
      once: true,
    });
    // If the event is not dispatched by the end of the timeout,
    // the user probably doesn't have MetaMask installed.
    setTimeout(handleEthereum, 3000); // 3 seconds
  }

  useMetamask();

  return (
    <>
      <Routes />
      <ToastContainer autoClose={500000000} hideProgressBar position="top-right" />
    </>
  );
};

export default App;
