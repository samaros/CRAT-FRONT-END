import React, { FC } from 'react';
import { H2, Text } from 'components/Typography';
import { Card } from 'components';
import { ThreeCoinsPng } from 'assets/img';
import cx from 'classnames';
import styles from './styles.module.scss';

type Props = {
  className?: string,
};

const CoinPercent: FC<Props> = ({ className }) => (
  <Card className={cx(styles.container, className)}>
    <img className={styles.image} src={ThreeCoinsPng} alt="" />
    <H2 className={styles.title} color="green">2.5%</H2>
    <Text className={styles.text} size="xs">
      EVERYTIME SOMEONE SENDS CRAT TOKEN, WE GIVE BACK 2.5% TO ALL TOKEN HOLDERS.
      SEE YOUR CRAT&rsquo;S GROW BY JUST HOLDING
    </Text>
  </Card>
);

export default CoinPercent;
