/* eslint-disable react/no-children-prop */
import React, { FC } from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { AnchorType } from 'types';
import { Text } from '..';
import styles from './styles.module.scss';

type Props = {
  link: string,
  name: string,
  className?: string,
  external?: boolean,
  onClick?: () => void,
};

const CustomLink:FC<Props> = ({
  link,
  name,
  className,
  external = false,
  onClick = () => {},
}) => {
  const Component = external ? 'a' : NavLink;
  const anchor: AnchorType = external ? 'href' : 'to';
  const additionalProps = external ? { target: '_blank' } : {};
  const activeClassName = external ? 'activeclassname' : 'activeClassName';

  const Inner = <Text tag="span" color="white" size="xs" className={styles.text}>{name}</Text>;
  // @ts-ignore
  return React.createElement(Component, {
    [anchor]: link,
    className: cx(styles.link, className),
    [activeClassName]: styles.active,
    exact: !external || undefined,
    onClick,
    ...additionalProps,
  }, Inner);
};

export default CustomLink;
