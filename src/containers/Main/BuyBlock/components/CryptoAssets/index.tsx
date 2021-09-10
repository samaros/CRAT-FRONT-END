import React, { FC } from 'react';
import cx from 'classnames';
import { Text } from 'components/Typography';
import { CryptoAssetsType } from 'types';
import styles from './styles.module.scss';

type Props = {
  className?: string,
  direction?: 'hor' | 'vert',
  use?: 'label' | 'rate',
  data: CryptoAssetsType[],
};

const CryptoAssets: FC<Props> = ({
  className, direction = 'hor', use = 'label', data,
}) => (
  <div className={cx(styles.container, styles[direction], className)}>
    {data.map((element) => {
      const { icon, label, rate } = element;
      return (
        <div key={label} className={cx(styles.cryptoLabel, { [styles.rate]: use === 'rate' })}>
          <img src={icon} alt="" />
          <Text className={styles.cryptoName}>{use === 'rate' ? `$${rate}` : label}</Text>
        </div>
      );
    })}
  </div>
);

export default CryptoAssets;
