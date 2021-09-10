import { Card, Button } from 'components';
import React, { FC } from 'react';
import { H4 } from 'components/Typography';
import cx from 'classnames';
import { PresaleSlideType } from 'types';
import styles from './styles.module.scss';

type Props = PresaleSlideType & {
  className?: string,
};

const PresaleSlide: FC<Props> = ({
  title,
  price,
  amount,
  status,
  className,
}) => {
  const isActive = status === 'buy';
  const isButton = status === 'buy' || status === 'soon';
  return (
    <Card className={cx(styles.container, { [styles.active]: isActive }, className)}>
      <H4 color={isActive ? 'white' : 'black'}>{title}</H4>
      <div className={cx(styles.lineBreak, { [styles.active]: isActive })} />
      <H4 color={isActive ? 'white' : 'black'}>{`${price}$`}</H4>
      <H4 weight={isActive ? 'medium' : 'normal'} color={isActive ? 'white' : 'black'}>{`${amount} TOKENS`}</H4>
      {isButton ? (
        <Button
          disabled={!isActive}
          className={cx(styles.buyBtn, { [styles.active]: isActive })}
          color="white"
        >
          <H4 weight="normal" className={styles.btnText} color="green">{status}</H4>
        </Button>
      ) : (
        <H4 className={styles.closed}>CLOSED</H4>
      )}
    </Card>
  );
};

export default PresaleSlide;
