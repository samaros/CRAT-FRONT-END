import React, { FC } from 'react';
import { Text } from 'components/Typography';
import cx from 'classnames';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  quarter: string;
  year: string;
  body: string;
};

const RoadMapSegment: FC<Props> = ({
  className,
  quarter,
  year,
  body,
}) => (
  <div className={cx(styles.container, className)}>
    <div className={styles.textWrapper}>
      <div className={styles.circle} />
      <Text className={styles.text} color="green" weight="bold" size="s">{quarter}</Text>
      <Text className={styles.text} color="black" size="l">{year}</Text>
      <Text className={cx(styles.text, styles.body)} color="black">{body}</Text>
    </div>
  </div>
);

export default RoadMapSegment;
