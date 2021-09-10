import React, {
  createElement, forwardRef, PropsWithChildren,
} from 'react';
import cx from 'classnames';
import type { IconName as ValueIcon } from '../../types';
import { H3, Icon } from '..';
import styles from './styles.module.scss';

type Tag = 'div' | 'section';

type Props = {
  icon?: ValueIcon,
  color?: 'dark' | 'light' | 'green',
  title?: string | JSX.Element,
  tag?: Tag,
  className?: string,
  classNameTitleWrap?: string,
  classNameTitle?: string,
};

const Card = forwardRef<HTMLElement, PropsWithChildren<Props>>(({
  tag = 'div',
  icon,
  color = 'dark',
  title,
  className,
  classNameTitleWrap,
  classNameTitle,
  children,
}, ref) => {
  const childrenWrap = (
    <>
      {typeof title === 'string' && (
        <div className={cx(styles.titleWrap, classNameTitleWrap)}>
          {icon && (
            <Icon
              icon={icon}
              className={styles.icon}
            />
          )}
          <H3
            weight="bold"
            className={cx(styles.title, classNameTitle)}
          >
            {title}
          </H3>
        </div>
      )}
      {typeof title !== 'string' && title}
      {children}
    </>
  );

  return (createElement(
    tag,
    {
      className: cx(
        styles.card,
        styles[color],
        className,
      ),
      ref,
    },
    childrenWrap,
  ));
});

export default Card;
