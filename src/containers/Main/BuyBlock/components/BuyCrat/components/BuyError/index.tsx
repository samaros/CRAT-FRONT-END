import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { Button, Icon, Text } from 'components';
import cx from 'classnames';

import { closeRing, infoRing, successRing } from 'assets/img';
import styles from './styles.module.scss';

type Props = {
  className?: string,
  type: 'error' | 'info' | 'success',
};

const helperObj = {
  error: {
    color: 'orange',
    image: closeRing,
    body: 'Transaction is failed',
  },
  info: {
    color: 'orange',
    image: infoRing,
    body: 'Succesfully bought',
  },
  success: {
    color: 'green',
    image: successRing,
    body: 'Insufficient funds',
  },
};

const BuyError: FC<Props> = ({ className, type }) => {
  const [isOpen, setOpen] = useState(true);

  const toggleOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setOpen(true);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <>
      {isOpen && (
      <div className={cx(styles.container, styles[helperObj[type].color], className)}>
        <Button className={styles.icon} color="transparent">
          <img src={helperObj[type].image} alt="" />
        </Button>
        <Text color="white">{helperObj[type].body}</Text>
        <Button
          type="button"
          color="transparent"
          onClick={toggleOpen}
          className={cx(styles.btnClose, styles.btn)}
        >
          <Icon
            icon="cross"
            className={cx(styles.iconClose, styles[helperObj[type].color])}
          />
        </Button>
      </div>
      )}
    </>
  );
};

export default BuyError;
