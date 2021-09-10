import React, { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { Header, Footer } from '..';

type Props = {
  withoutHeader?: boolean,
};

const Layout: FC<PropsWithChildren<Props>> = ({
  withoutHeader = false,
  children,
}) => (
  <div className={styles.contentWrap}>
    {!withoutHeader && (
      <Header />
    )}
    <main className={styles.content}>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
