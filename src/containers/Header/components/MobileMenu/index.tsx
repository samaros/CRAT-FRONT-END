import React, { FC } from 'react';
import { Logo } from 'components';
import { Text } from 'components/Typography';
import { IconLinks, Links } from 'containers';
import cx from 'classnames';
import { ConnectDropdownMenu, ConnectButton } from '..';
import styles from './styles.module.scss';

type Props = {
  isConnected: boolean,
  address: string,
  className?: string,
  toggleModal: () => void,
  toggleMenu: () => void,
  connectAction: () => void,
  disconnectAction: () => void,
};

const MobileMenu: FC<Props> = ({
  isConnected,
  address,
  className,
  toggleModal,
  toggleMenu,
  connectAction,
  disconnectAction,
}) => (
  <div className={cx(styles.container, className)}>
    <Logo className={styles.logo} />
    <div className={styles.connectWrapper}>
      {isConnected ? (
        <ConnectDropdownMenu
          address={address}
          disconnectAction={disconnectAction}
        />
      ) : (
        <ConnectButton
          className={styles.connectBtn}
          color="yellow"
          connectAction={connectAction}
          disconnectAction={disconnectAction}
        />
      )}
    </div>
    <Links
      direction="vert"
      className={styles.links}
      whitelistHandler={() => {
        toggleModal();
        toggleMenu();
      }}
    />
    <IconLinks color="yellow" />
    <Text
      align="center"
      className={styles.bottomText}
      size="xs"
      color="white"
    >
      CRAT © 2021 ALL RIGHTS RESERVED.
    </Text>
  </div>
);

export default MobileMenu;
