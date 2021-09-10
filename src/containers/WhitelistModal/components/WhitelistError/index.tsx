import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import cx from 'classnames';
import { Text, Button } from 'components';
import { closeRing } from 'assets/img';
import styles from './styles.module.scss';

type Props = {
  className?: string
  body: string
};

const WhitelistError: FC<Props> = ({ className, body }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {isVisible && (
      <div className={cx(styles.container, className)}>
        <Button onClick={handleIsVisible} className={styles.closeBtn} color="transparent">
          <img src={closeRing} alt="" />
        </Button>
        <Text className={styles.text} align="center" color="white" size="l">{body}</Text>
      </div>
      )}
    </>
  );
};

export default WhitelistError;
