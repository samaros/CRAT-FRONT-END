import { connectRouter } from 'connected-react-router';
import { history } from 'utils';
import wallet from './wallet/reducer';
import tokens from './tokens/reducer';
import stage from './stage/reducer';
import notificationModal from './notificationModal/reducer';
import ui from './ui/reducer';

export default {
  router: connectRouter(history),
  wallet,
  tokens,
  stage,
  notificationModal,
  ui,
};
