import { Card, Button } from 'components';
import React, { FC } from 'react';
import { H4 } from 'components/Typography';
import cx from 'classnames';
import { PresaleSlideType } from 'types';
import { numberFormatter } from 'utils';
import styles from './styles.module.scss';

type Props = PresaleSlideType & {
  className?: string,
};

const PresaleSlide: FC<Props> = ({
  title,
  price,
  tokenLimit,
  status,
  className,
}) => {
  const isActive = status === 'ACTIVE';
  return (
    <Card className={cx(styles.container, { [styles.active]: isActive }, className)}>
      <H4 color={isActive ? 'white' : 'black'}>{title}</H4>
      <div className={cx(styles.lineBreak, { [styles.active]: isActive })} />
      <H4 color={isActive ? 'white' : 'black'}>{`${price}$`}</H4>
      <H4 weight={isActive ? 'medium' : 'normal'} color={isActive ? 'white' : 'black'}>{`${numberFormatter(+tokenLimit, 3)} TOKENS`}</H4>
      {status !== 'CLOSED' && (
        <Button
          disabled={!isActive}
          className={cx(styles.buyBtn, { [styles.active]: isActive })}
          color="white"
        >
          <H4 weight="normal" className={styles.btnText} color="green">{status}</H4>
        </Button>
      )}
      {status === 'CLOSED' && (
        <H4 className={styles.closed}>SOON</H4>
      )}
    </Card>
  );
};

export default PresaleSlide;
