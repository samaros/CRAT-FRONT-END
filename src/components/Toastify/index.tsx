import React, { FC } from 'react';
import cx from 'classnames';
import { Text } from 'components';
import { successRing } from 'assets/img';
import './styles.scss';
import type { ToastifyProps } from '../../types';

import styles from './styles.module.scss';

type Props = ToastifyProps & {
  className?: string,
};
const Toastify:FC<Props> = ({
  type,
  message,
  className,
}) => (
  <div className={cx(styles.toastify, styles[type], className)}>
    <img className={styles.icon} src={successRing} alt="" />
    <div className={styles.body}>
      <Text color="white" className={styles.message}>{message}</Text>
    </div>
  </div>
);

export default Toastify;
