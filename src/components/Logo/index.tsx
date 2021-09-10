import React, { FC } from 'react';
import { Text, H2 } from 'components/Typography';
import cx from 'classnames';
import logo from 'assets/img/Logo.svg';
import styles from './styles.module.scss';

type Props = {
  className?: string,
};

const Logo:FC<Props> = ({ className }) => (
  <div className={cx(styles.container, className)}>
    <img src={logo} className={styles.logo} alt="ArrowDex" />
    <div className={styles.textWrapper}>
      <H2 color="white">CRAT</H2>
      <Text color="white" weight="bold" size="xxs">THE D2C BLOCKCHAIN PROTOCOL</Text>
    </div>
  </div>
);

export default Logo;
