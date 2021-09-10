import {
  FC,
  PropsWithChildren,
  createElement,
  CSSProperties,
} from 'react';
import cx from 'classnames';
import {
  TextAlign as Align,
  TextColor as Color,
  TextSize as Size,
  TextWeight as Weight,
} from 'types';

import styles from './styles.module.scss';

type Tag = 'p' | 'span';

type Props = {
  tag?: Tag,
  className?: string,
  style?: CSSProperties,
  size?: Size,
  color?: Color,
  align?: Align,
  weight?: Weight,
};

const Text: FC<PropsWithChildren<Props>> = ({
  tag = 'p',
  children,
  className,
  style = { },
  size = 's',
  color = 'basic',
  align = 'left',
  weight = 'normal',
}) => (
  createElement(
    tag,
    {
      style,
      className: cx(
        styles.text,
        styles[size],
        styles[color],
        styles[align],
        styles[`${weight}Weight`],
        className,
      ),
    },
    children,
  )
);

export default Text;
