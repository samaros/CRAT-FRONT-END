/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, PropsWithChildren } from 'react';
import RModal, { Props as RModalProps } from 'react-modal';
import cx from 'classnames';
import { Icon } from 'components';
import styles from './styles.module.scss';

type Props = RModalProps & {
  isOpen: boolean,
  className?: string,
  classNameContent?: string,
  classNameOverlay?: string,
  withCloseBtn?: boolean,
  shouldCloseOnOverlayClick?: boolean,
  onClose?: () => void,
};

const Modal: FC<PropsWithChildren<Props>> = ({
  isOpen,
  children,
  className,
  classNameContent,
  classNameOverlay,
  withCloseBtn = true,
  shouldCloseOnOverlayClick = true,
  onClose = () => {},
  ...reactModalProps
}) => (
  <RModal
    shouldCloseOnEsc
    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    isOpen={isOpen}
    className={cx(styles.modal, className)}
    overlayClassName={cx(styles.overlay, classNameOverlay)}
    ariaHideApp={false}
    onRequestClose={onClose}
    {...reactModalProps}
  >
    {withCloseBtn && (
      <button type="button" className={styles.closeBtn} onClick={onClose}>
        <Icon icon="cross" />
      </button>
    )}

    <div className={cx(styles.content, classNameContent)}>
      {children}
    </div>
  </RModal>
);

export default Modal;
