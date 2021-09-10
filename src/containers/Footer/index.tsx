import { Links, IconLinks } from 'containers';
import { Text } from 'components/Typography';
import { RBLogo } from 'assets/img';
import React from 'react';

import styles from './styles.module.scss';

// type Footer1Props = {};

const Footer = () => (
  <div className={styles.container}>
    <Links className={styles.links} linkClassName={styles.link} whitelistHandler={() => {}} />
    <div className={styles.centerBlock}>
      <div className={styles.iconWrapper}>
        <IconLinks iconClassName={styles.icon} />
      </div>
    </div>
    <div className={styles.rockBlock}>
      <Text size="xxxs">POWERED BY</Text>
      <img src={RBLogo} alt="" />
    </div>
    <Text>CRAT © 2021 ALL RIGHTS RESERVED.</Text>
  </div>
);

export default Footer;
