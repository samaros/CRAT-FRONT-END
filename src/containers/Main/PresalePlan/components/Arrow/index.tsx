import React, { FC } from 'react';
import cx from 'classnames';
import { Arrow as ArrowImg } from 'assets/img';
import styles from './styles.module.scss';

type Props = {
  direction?: 'left' | 'right',
  onClick: () => void,
  className?: string,
  isArrow?: boolean,
};

const Arrow: FC<Props> = ({
  direction = 'right', onClick, className, isArrow = true,
}) => (
  <div
    className={cx(
      styles.container,
      styles[direction],
      styles.noArrow && !isArrow,
      className,
    )}
  >
    <button type="button" onClick={onClick} className={cx(styles.arrowWrapper, styles[direction])}>
      <img className={styles.arrow} src={ArrowImg} alt="" />
    </button>
  </div>
);

export default Arrow;
