import React, { FC } from 'react';
import cx from 'classnames';
import { Card } from 'components';
import { Text } from 'components/Typography';
import { CryptoAssetsType } from 'types';
import styles from './styles.module.scss';
import CryptoAssets from '../../CryptoAssets';

type Props = {
  className?: string
  data: CryptoAssetsType[],
};

const CurrentRate: FC<Props> = ({ className, data }) => (
  <Card className={cx(styles.container, className)}>
    <Text size="m">CURRENT RATES:</Text>
    <CryptoAssets data={data} direction="vert" use="rate" />
  </Card>
);

export default CurrentRate;
