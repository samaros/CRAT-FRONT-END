import React, { FC } from 'react';
import cx from 'classnames';
import { Text } from 'components/Typography';
import { Card } from 'components';
import styles from './styles.module.scss';

type Props = {
  price: number,
  nextStagePrice: number,
  className?: string
};

const CurrentPrice: FC<Props> = ({ price, nextStagePrice, className }) => (
  <Card className={cx(styles.container, className)}>
    <Text size="xxl" color="black">{`${price}$`}</Text>
    <Text size="m" color="green">CURRENT CRAT PRICE</Text>
    <Text className={styles.mgTop}>{`${nextStagePrice}$ next stage`}</Text>
  </Card>
);

export default CurrentPrice;
