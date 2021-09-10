import React, { FC } from 'react';
import { Text } from 'components/Typography';
import cx from 'classnames';
import { Card, ProgressBar } from 'components';
import styles from './styles.module.scss';

type Props = {
  className?: string
  stage: number,
  daysLeft: number,
  progressMax: number,
  progressCur: number,
};

const CurrentStage: FC<Props> = ({
  className, stage, daysLeft, progressMax, progressCur,
}) => (
  <Card className={cx(styles.container, className)}>
    <Text size="xxl" color="black">{`№${stage}`}</Text>
    <Text size="m" color="green">CURRENT STAGE</Text>
    <Text className={styles.dayLeft}>{`${daysLeft} days left`}</Text>
    <ProgressBar
      className={styles.progressBar}
      base={progressMax}
      percentage={progressCur}
    />
    <Text>{`${progressCur} of ${progressMax} sold`}</Text>
  </Card>
);

export default CurrentStage;
