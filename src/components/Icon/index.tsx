import React, { FC, CSSProperties } from 'react';
import cx from 'classnames';
import type { IconName as Value } from '../../types';

type Props = {
  className?: string,
  icon: Value | string,
  style?: CSSProperties,
  color?: string,
};

const Icon:FC<Props> = ({ className, icon, style }) => (
  <i className={cx(`icon-${icon}`, className)} style={style} />
);

export default Icon;
