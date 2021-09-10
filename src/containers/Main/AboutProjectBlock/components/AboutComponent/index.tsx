import React, { FC } from 'react';
import { H3, Text } from 'components/Typography';
import cx from 'classnames';
import { AboutComponentType } from 'types';
import styles from './styles.module.scss';

const AboutComponent: FC<AboutComponentType> = ({
  title,
  body1,
  body2,
  image,
  isRight,
  backgroundColor,
}) => (
  <div className={cx(styles.container, { [styles.right]: isRight })}>
    <div className={cx(styles.imageWrapper, styles[backgroundColor])}>
      <img className={styles.image} src={image} alt="" />
    </div>
    <div className={styles.textWrapper}>
      <H3 className={styles.title} weight="normal" color="green">{title}</H3>
      <Text>{body1}</Text>
      {body2 && (
        <Text className={styles.secondText}>{body2}</Text>
      )}
    </div>
  </div>
);

export default AboutComponent;
