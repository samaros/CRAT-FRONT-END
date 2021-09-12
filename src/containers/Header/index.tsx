import { Burger, Logo } from 'components';
import React, { useCallback, useState, FC } from 'react';
import { useShallowSelector } from 'hooks';
import { State, Web3State } from 'types';
import web3Selector from 'store/web3/selectors';
import { Links, WhitelistModal } from 'containers';
import cx from 'classnames';
import styles from './styles.module.scss';
import { ConnectButton, MobileMenu } from './components';

type Props = {
};

const Header: FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const { status, address } = useShallowSelector<State, Web3State>(web3Selector.getWeb3());

  return (
    <header className={styles.container}>
      <Burger
        className={styles.burger}
        onClick={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
      <Logo className={styles.logo} />
      <Links className={styles.links} whitelistHandler={toggleModal} />
      <ConnectButton className={styles.connectBtn} />
      {/* {isMenuOpen && ( */}
      <MobileMenu
        className={cx(styles.mobileMenu, { [styles.mobileMenuOpen]: isMenuOpen })}
        isConnected={status === 'CONNECTED'}
        address={address || ''}
        toggleMenu={toggleMenu}
        toggleModal={toggleModal}
      />
      {/* )} */}
      <WhitelistModal
        isOpen={isModalOpen}
        onClose={toggleModal}
      />
    </header>
  );
};

export default Header;
