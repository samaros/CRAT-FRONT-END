import React, { FC, useState, useCallback } from 'react';
import { Button } from 'components';
import OutsideClickHandler from 'react-outside-click-handler';
import { Text } from 'components/Typography';
import cx from 'classnames';
import { useShallowSelector } from 'hooks';
import { State, WalletState } from 'types';
import { shortenPhrase } from 'utils';
import walletSelector from 'store/wallet/selectors';
import styles from './styles.module.scss';
import { ConnectDropdownMenu } from '..';

type Props = {
  color?: 'default' | 'yellow',
  className?: string,
  connectAction: () => void,
  disconnect: () => void,
};

const ConnectButton: FC<Props> = ({
  className, color = 'default', connectAction, disconnect,
}) => {
  const { address, status } = useShallowSelector<State, WalletState>(walletSelector.getWallet);

  const isConnected = status === 'CONNECTED';

  const buttonText = isConnected && address ? shortenPhrase(address) : 'CONNECT WALLET';

  const [isConnectDropdownMenuVisible, setIsConnectDropdownMenuVisible] = useState(false);

  const toggleConnectDropdownMenu = useCallback(() => {
    setIsConnectDropdownMenuVisible(!isConnectDropdownMenuVisible);
  }, [isConnectDropdownMenuVisible]);

  const connectBtnHandler = isConnected ? toggleConnectDropdownMenu : connectAction;
  return(
    <div className={styles.container}>
      <OutsideClickHandler onOutsideClick={
          () => setIsConnectDropdownMenuVisible(false)
        }
      >
        <Button
          color="transparentWhite"
          onClick={connectBtnHandler}
          className={cx(className, styles[color])}
        >
          <Text className={styles.text} size="xs">{buttonText}</Text>
          {isConnected &&
          (<div className={cx(styles.arrow, { [styles.isDown]: isConnectDropdownMenuVisible })} />)}
        </Button>
        {(isConnectDropdownMenuVisible && status === 'CONNECTED') && (
          <ConnectDropdownMenu
            isAbsolute
            address={address || ''}
            disconnect={disconnect}
            className={styles.dropdownMenu}
          />
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default ConnectButton;
