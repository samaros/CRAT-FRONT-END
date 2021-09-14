export default {
  wallet: {
    whitelist: '/whitelist/',
    checkIsWhitelist: (address: string) => `/is_whitelisted/${address}/`,
    signBuy: 'signature/',
  },
  tokens: '/tokens/',
  stage: '/stage/',
};
