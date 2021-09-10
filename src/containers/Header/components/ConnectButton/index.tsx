import React, { FC, useCallback, useState } from 'react';
import { Button } from 'components';
import { Text } from 'components/Typography';
import cx from 'classnames';
import { useShallowSelector } from 'hooks';
import { Provider, State, Web3State } from 'types';
import { shortenPhrase } from 'utils';
import web3Selector from 'store/web3/selectors';
import { MetamaskRequestMethod } from 'appConstants';
import detectEthereumProvider from '@metamask/detect-provider';
import useWindowSize from 'hooks/useWindowSize';
import styles from './styles.module.scss';
import { ConnectDropdownMenu } from '..';

type Props = {
  color?: 'default' | 'yellow',
  className?: string,
};

const ConnectButton: FC<Props> = ({ className, color = 'default' }) => {
  const { address, status } = useShallowSelector<State, Web3State>(web3Selector.getWeb3());

  const isConnected = status === 'CONNECTED';

  const buttonText = isConnected && address ? shortenPhrase(address) : 'CONNECT WALLET';

  const handleConnectMetamask = async () => {
    const provider: Provider = await detectEthereumProvider();
    provider.request({ method: MetamaskRequestMethod.eth_requestAccounts });
  };

  const { width } = useWindowSize();

  const isDesktopSize = width < 760;

  const [isConnectDropdownMenuVisible, setIsConnectDropdownMenuVisible] = useState(false);

  const toggleConnectDropdownMenu = useCallback(() => {
    setIsConnectDropdownMenuVisible(!isConnectDropdownMenuVisible);
  }, [isConnectDropdownMenuVisible]);

  const connectBtnHandler = isConnected ? toggleConnectDropdownMenu : handleConnectMetamask;
  return(
    <div className={styles.container}>
      <Button
        color="transparentWhite"
        onClick={connectBtnHandler}
        disabled={isDesktopSize}
        className={cx(className, styles[color])}
      >
        <Text className={styles.text} size="xs">{buttonText}</Text>
        {isConnected &&
          (<div className={cx(styles.arrow, { [styles.isDown]: isConnectDropdownMenuVisible })} />)}
      </Button>
      {isConnectDropdownMenuVisible && (
        <ConnectDropdownMenu
          isAbsolute
          address={address || ''}
        />
      )}
    </div>
  );
};

export default ConnectButton;
