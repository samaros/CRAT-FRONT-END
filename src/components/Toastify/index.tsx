import React, { FC } from 'react';
import cx from 'classnames';
import { Icon, Text } from 'components';
import type { ToastifyProps, IconName as IconValue } from '../../types';

import styles from './styles.module.scss';

type Props = ToastifyProps & {
  className?: string,
};

const icons: Record<ToastifyProps['type'], IconValue> = {
  success: 'checkmark',
  error: 'cross',
  info: 'bell',
};

const Toastify:FC<Props> = ({
  type,
  title,
  message,
  className,
}) => (
  <div className={cx(styles.toastify, styles[type], className)}>
    <Icon icon={icons[type]} className={styles.icon} />
    <div className={styles.body}>
      <Text className={styles.title}>
        {title}
        !
      </Text>
      <Text color="black" className={styles.message}>{message}</Text>
    </div>
  </div>
);

export default Toastify;
