import React, { FC, useEffect } from 'react';
import cx from 'classnames';
import RModal, { Props as RModalProps } from 'react-modal';
import { TextAlign as Align } from 'types';
import { Text, Icon, Button } from '..';
import styles from './styles.module.scss';

const ROOT = document.getElementById('root');

type Props = {
  onClose: () => void;
  title?: string;
  classNameHeader?: string;
  classNameTitle?: string;
  isArrowBack?: boolean;
  onArrowBack?: () => void,
  titleAlign?: Align;
} & RModalProps;

const Modal: FC<Props> = ({
  onClose,
  title,
  isOpen,
  style,
  portalClassName,
  bodyOpenClassName,
  htmlOpenClassName,
  className,
  classNameHeader,
  classNameTitle,
  appElement,
  onAfterOpen = () => {},
  onAfterClose = () => {},
  closeTimeoutMS,
  aria,
  data,
  role,
  contentLabel,
  contentRef,
  overlayRef,
  testId,
  id,
  isArrowBack = false,
  onArrowBack = () => {},
  titleAlign = 'left',
  children,
}) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <RModal
      isOpen={isOpen}
      style={style}
      portalClassName={portalClassName}
      bodyOpenClassName={cx(styles.body, bodyOpenClassName)}
      htmlOpenClassName={htmlOpenClassName}
      className={cx(styles.modal, className)}
      overlayClassName={styles.overlay}
      appElement={appElement}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      onRequestClose={onClose}
      closeTimeoutMS={closeTimeoutMS}
      ariaHideApp={false}
      shouldFocusAfterRender={false}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      shouldReturnFocusAfterClose
      parentSelector={() => ROOT!}
      aria={aria}
      data={data}
      role={role}
      contentLabel={contentLabel}
      contentRef={contentRef}
      overlayRef={overlayRef}
      testId={testId}
      id={id}
    >
      <div
        className={cx(
          styles.header,
          title && styles.withTitle,
          classNameHeader,
          styles[titleAlign],
        )}
      >
        {isArrowBack && (
          <Button
            type="button"
            color="transparent"
            className={styles.btnBack}
            onClick={onArrowBack}
          >
            <Icon
              icon="dropdown"
              className={styles.iconBack}
            />
          </Button>
        )}
        {title && (
          <Text
            color="green"
            size="xl"
            className={cx(styles.title, classNameTitle)}
          >
            {title}
          </Text>
        )}
        <Button
          type="button"
          color="transparent"
          onClick={onClose}
          className={cx(styles.btnClose, styles.btn)}
        >
          <Icon
            icon="cross"
            className={styles.iconClose}
          />
        </Button>
      </div>
      {children}
    </RModal>
  );
};

export default Modal;
