import { connectRouter } from 'connected-react-router';
import { history } from 'utils';
import web3 from './web3/reducer';

export default {
  router: connectRouter(history),
  web3,
};
