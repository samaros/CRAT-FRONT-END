import { Burger, Logo } from 'components';
import React, { useCallback, useState, FC } from 'react';
import { useShallowSelector } from 'hooks';
import { Provider, State, WalletState } from 'types';
import walletSelector from 'store/wallet/selectors';
import { Links, WhitelistModal } from 'containers';
import cx from 'classnames';
import { disconnectWallet } from 'store/wallet/actions';
import { useDispatch } from 'react-redux';
import detectEthereumProvider from '@metamask/detect-provider';
import { MetamaskRequestMethod } from 'appConstants';
import { ConnectButton, MobileMenu } from './components';
import styles from './styles.module.scss';

type Props = {
};

const Header: FC<Props> = () => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const { status, address } = useShallowSelector<State, WalletState>(walletSelector.getWallet);

  const handleDisconnect = useCallback(() => {
    dispatch(disconnectWallet());
  }, []);

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
        disconnectAction={handleDisconnect}
      />
      <MobileMenu
        className={cx(styles.mobileMenu, { [styles.mobileMenuOpen]: isMenuOpen })}
        isConnected={status === 'CONNECTED'}
        address={address || ''}
        toggleMenu={toggleMenu}
        toggleModal={toggleModal}
        connectAction={handleConnect}
        disconnectAction={handleDisconnect}
      />
      <WhitelistModal
        isOpen={isModalOpen}
        onClose={toggleModal}
      />
    </header>
  );
};

export default Header;
