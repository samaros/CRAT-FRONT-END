import React, { FC } from 'react';
import cx from 'classnames';
import { Text } from 'components/Typography';
import { Token } from 'types';
import { cryptoAssetsIcons } from 'appConstants';
import styles from './styles.module.scss';

type Props = {
  className?: string,
  direction?: 'hor' | 'vert',
  use?: 'label' | 'rate',
  data: Token[],
};

const CryptoAssets: FC<Props> = ({
  className, direction = 'hor', use = 'label', data,
}) => (
  <div className={cx(styles.container, styles[direction], className)}>
    {data.map((element) => {
      const { symbol, price } = element;
      return (
        <div key={symbol} className={cx(styles.cryptoLabel, { [styles.rate]: use === 'rate' })}>
          <img src={cryptoAssetsIcons[symbol.toLowerCase()]} alt="" />
          <Text className={styles.cryptoName}>{use === 'rate' ? `$${price}` : symbol}</Text>
        </div>
      );
    })}
  </div>
);

export default CryptoAssets;
