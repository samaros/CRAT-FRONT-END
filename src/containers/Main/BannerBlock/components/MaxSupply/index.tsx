import React, { FC } from 'react';
import { H3, Text } from 'components/Typography';
import { Card } from 'components';
import cx from 'classnames';
import styles from './styles.module.scss';

type Props = {
  className?: string,
};

const MaxSupply: FC<Props> = ({ className }) => (
  <Card className={cx(styles.container, className)}>
    <div className={styles.text}>
      <H3 weight="normal" color="green">40,000,000</H3>
      <Text color="green">CRAT</Text>
    </div>
    <Text size="xxs">CRAT Max Supply</Text>
  </Card>
);

export default MaxSupply;
