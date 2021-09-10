import { MetamaskStatus } from 'appConstants';
import { Web3Action, Web3State } from 'types';
import actionTypes from './actionTypes';

const initialState: Web3State = {
  address: '',
  status: MetamaskStatus.NOT_AVAILABLE,
  whitelisted: false,
};

export default (state: Web3State = initialState, action: Web3Action): Web3State => {
  switch (action.type) {
    case actionTypes.WEB3_CONNECT_SUCCESS: {
      const { payload: { address, status } } = action;
      return {
        ...state,
        address,
        status,
      };
    }

    case actionTypes.WEB3_CONNECT_ERROR:
    case actionTypes.WEB3_CONNECT_RESET: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};
