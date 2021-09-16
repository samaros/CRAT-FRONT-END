import React, { FC } from 'react';
import { Text } from 'components/Typography';
import {
  Copyable, Icon, Button, Card,
} from 'components';
import cx from 'classnames';
import { shortenPhrase } from 'utils';
import styles from './styles.module.scss';

type Props = {
  address: string,
  isAbsolute?: boolean,
  disconnect: () => void,
  className?: string,
};

const ConnectDropdownMenu: FC<Props> = ({
  address, isAbsolute = false, disconnect, className,
}) => (
  <Card className={cx(styles.container, { [styles.absolute]: isAbsolute }, className)}>
    <Text tag="p" weight="bold" color="green">ACCOUNT</Text>
    <Text tag="p" color="black" size="xs">CONNECTED WITH METAMASK</Text>
    <Copyable withIcon valueToCopy={address} classNameIcon={styles.icon}>
      <div className={styles.addressContainer}>{shortenPhrase(address)}</div>
    </Copyable>
    <Button color="transparent" onClick={disconnect}>
      <Icon className={styles.disconnectIcon} icon="exit" />
      DISCONNECT
    </Button>

  </Card>
);

export default ConnectDropdownMenu;
