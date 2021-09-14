import React, { FC } from 'react';
import { Copyable } from 'components';
import { Text } from 'components/Typography';
import { importantAddresses } from 'appConstants';
import { shortenPhrase } from 'utils';
import styles from './styles.module.scss';

type Props = {
  className?: string
};

const ImportantAddresses: FC<Props> = () => (
  <div className={styles.container}>
    <Text className={styles.importantAddressesTitle} weight="bold">IMPORTANT ADDRESSES</Text>
    {importantAddresses.map((element) => {
      const { name, address } = element;

      return (
        <div className={styles.address} key={name}>
          <div>
            <Text className={styles.text} tag="p" weight="bold" color="green">{name}</Text>
            <Text className={styles.text} tag="p" color="black">{shortenPhrase(address, 30)}</Text>
          </div>
          <Copyable
            withIcon
            classNameIcon={styles.copyIcon}
            valueToCopy={address}
          />
        </div>
      );
    })}
  </div>
);

export default ImportantAddresses;
