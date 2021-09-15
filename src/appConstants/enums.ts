export enum WalletStatus {
  AVAILABLE = 'AVAILABLE',
  NOT_AVAILABLE = 'NOT_AVAILABLE',
  CONNECTED = 'CONNECTED',
}

export enum MetamaskRequestMethod {
  eth_requestAccounts = 'eth_requestAccounts',
  eth_accounts = 'eth_accounts',
}

export enum Web3Event {
  disconnect = 'disconnect',
  connect = 'connect',
  accountsChanged = 'accountsChanged',
}

export enum PrivateRouteClientCheck {
  metamask = 'metamask',
  authAndMetamask = 'authAndMetamask',
}
