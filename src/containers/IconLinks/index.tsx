import React, { FC } from 'react';
import { iconLinks } from 'appConstants';
import { Button } from 'components';
import { ButtonColor } from 'types';
import cx from 'classnames';
import styles from './styles.module.scss';

type Props = {
  color?: ButtonColor,
  iconClassName?: string,
};

const IconLinks: FC<Props> = ({ color = 'green', iconClassName }) => (
  <div className={styles.container}>
    {iconLinks.map((linkEl) => {
      const { icon, link, adjustLeft } = linkEl;
      return (
        <a href={link} key={icon}>
          <Button
            color={color}
            icon={icon}
            iconClassName={cx(iconClassName, { [styles.left]: adjustLeft })}
            className={styles.btnIcon}
          />
        </a>
      );
    })}
  </div>
);

export default IconLinks;
