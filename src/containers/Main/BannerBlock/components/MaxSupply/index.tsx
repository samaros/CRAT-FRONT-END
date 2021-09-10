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
    <H3 weight="normal" color="green">40,000,000<Text className={styles.text} tag="span" color="green">  CRAT</Text></H3>
    <Text size="xxs">CRAT Max Supply</Text>
  </Card>
);

export default MaxSupply;
