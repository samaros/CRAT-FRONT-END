import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import { ButtonColor, ButtonSize, IconName } from 'types';
import { Icon } from '..';
import styles from './styles.module.scss';

type PropsButton = {
  color?: ButtonColor,
  size?: ButtonSize,
  isFullWidth?: boolean,
  className?: string,
  onClick?: (event: React.MouseEvent) => void,
  type?: 'button' | 'submit',
  disabled?: boolean,
  icon?: IconName,
  iconClassName?: string,
};

const Button: FC<PropsWithChildren<PropsButton>> = ({
  color = 'yellow',
  size = 'normal',
  isFullWidth = false,
  onClick = () => {},
  className,
  type = 'button',
  children,
  disabled,
  icon,
  iconClassName,
}) => (
  // TODO: check eslint disable
  // eslint-disable-next-line react/button-has-type
  <button
    type={type}
    className={cx(
      styles.button,
      styles[size],
      styles[color],
      className,
      {
        [styles.isFullWidth]: isFullWidth,
        [styles.disabled]: disabled,
      },
    )}
    onClick={onClick}
    disabled={disabled as boolean}
  >
    {icon && (
      <Icon
        icon={icon}
        className={iconClassName as string}
      />
    )}
    {children}
  </button>
);

export default Button;
