import React, { FC } from 'react';
import cx from 'classnames';
import { headerLinks } from 'appConstants';
import { Link } from 'components';
import styles from './styles.module.scss';

type Props = {
  direction?: 'vert' | 'hor',
  className?: string,
  linkClassName?: string,
  whitelistHandler: () => void,
};

const Links: FC<Props> = ({
  direction = 'hor', className, linkClassName, whitelistHandler,
}) => (
  <div className={cx(styles.linksWrapper, styles[direction], className)}>
    {headerLinks.map((linkEl) => {
      const { name, link } = linkEl;
      return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link
          key={name}
          name={name}
          link={link}
          external={name !== 'WHITELIST'}
          className={cx(styles.link, linkClassName)}
          onClick={name === 'WHITELIST' ? whitelistHandler : undefined}
        />
      );
    })}
  </div>
);

export default Links;
