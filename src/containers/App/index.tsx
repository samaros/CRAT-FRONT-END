/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useMetamask } from 'hooks';
import 'react-toastify/dist/ReactToastify.css';
import Routes from '../Routes';

const App = () => {
  useMetamask();

  return (
    <>
      <Routes />
      <ToastContainer autoClose={500000000} hideProgressBar position="top-right" />
    </>
  );
};

export default App;
