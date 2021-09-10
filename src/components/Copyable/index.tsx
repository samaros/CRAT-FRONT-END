import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { setNotification } from '../../utils';
import { Copy } from 'assets/img';
import styles from './styles.module.scss';

type Props = {
  valueToCopy: string,
  onCopy?: () => void,
  withIcon?: boolean,
  className?: string,
  classNameIcon?: string,
};

const Copyable: FC<PropsWithChildren<Props>> = ({
  valueToCopy,
  onCopy = () => {},
  children,
  withIcon,
  className,
  classNameIcon,
}) => (
  <CopyToClipboard
    text={valueToCopy}
    onCopy={() => {
      onCopy();
      // setNotification({
      //   type: 'success',
      //   title: 'Copy',
      //   message: 'Value copied!',
      // });
    }}
  >
    <div className={cx(
      styles.copy,
      withIcon && styles.withIcon,
      className,
    )}
    >
      {children}
      {withIcon && <img src={Copy} alt="" className={cx(styles.icon, classNameIcon)} />}
    </div>
  </CopyToClipboard>
);

export default Copyable;
