import { Burger, Logo } from 'components';
import React, { useCallback, useState, FC } from 'react';
import { useShallowSelector } from 'hooks';
import { Provider, State, WalletState } from 'types';
import walletSelector from 'store/wallet/selectors';
import { Links } from 'containers';
import cx from 'classnames';
import detectEthereumProvider from '@metamask/detect-provider';
import { MetamaskRequestMethod } from 'appConstants';
import { ConnectButton, DisconnectModal, MobileMenu } from './components';
import styles from './styles.module.scss';

type Props = {
  toggleModal: () => void,
};

const Header: FC<Props> = ({ toggleModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen]);

  const [isDisconnectModalOpen, setDisconnectModalOpen] = useState(false);
  const toggleDisconnectModal = useCallback(
    () => setDisconnectModalOpen(!isDisconnectModalOpen),
    [isDisconnectModalOpen],
  );

  const { status, address } = useShallowSelector<State, WalletState>(walletSelector.getWallet);

  const handleConnect = async () => {
    const provider: Provider = await detectEthereumProvider();
    provider.request({ method: MetamaskRequestMethod.eth_requestAccounts });
  };

  return (
    <header className={styles.container}>
      <Burger
        className={styles.burger}
        onClick={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
      <Logo className={styles.logo} />
      <Links className={styles.links} whitelistHandler={toggleModal} />
      <ConnectButton
        className={styles.connectBtn}
        connectAction={handleConnect}
        disconnect={toggleDisconnectModal}
      />
      <MobileMenu
        className={cx(styles.mobileMenu, { [styles.mobileMenuOpen]: isMenuOpen })}
        isConnected={status === 'CONNECTED'}
        address={address || ''}
        toggleMenu={toggleMenu}
        toggleModal={toggleModal}
        connectAction={handleConnect}
        disconnect={toggleDisconnectModal}
      />
      <DisconnectModal
        isOpen={isDisconnectModalOpen}
        onClose={toggleDisconnectModal}
      />
    </header>
  );
};

export default Header;
