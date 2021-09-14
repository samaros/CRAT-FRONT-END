import React from 'react';
// import { ToastContainer } from 'react-toastify';
import { useMetamask } from 'hooks';
import Routes from '../Routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  useMetamask();

  return (
    <>
      <Routes />
      {/* <ToastContainer hideProgressBar position="top-right" /> */}
    </>
  );
};

export default App;
