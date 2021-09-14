import React, { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { Header, Footer } from '..';

type Props = {
  withoutHeader?: boolean,
  toggleModal: () => void,
};

const Layout: FC<PropsWithChildren<Props>> = ({
  withoutHeader = false,
  children,
  toggleModal,
}) => (
  <div className={styles.contentWrap}>
    {!withoutHeader && (
      <Header
        toggleModal={toggleModal}
      />
    )}
    <main className={styles.content}>
      {children}
    </main>
    <Footer
      toggleModal={toggleModal}
    />
  </div>
);

export default Layout;
