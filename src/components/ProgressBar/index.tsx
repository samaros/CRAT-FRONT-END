import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type Props = {
  base: number,
  percentage: number,
  className?: string,
};

const ProgressBar: FC<Props> = ({ base, percentage, className }) => (
  <div className={cx(styles.resultProgressBar, className)}>
    {/* <div className={styles.resultProgressPercent}>
      {base
        ? `${parseFloat(((100 / base) * percentage).toFixed(2))}%`
        : '0%'}
    </div> */}
    <div
      className={styles.resultProgressBarInner}
      style={{
        width: base
          ? `${(100 / base) * percentage}%`
          : '0%',
      }}
    />
  </div>
);

export default ProgressBar;
