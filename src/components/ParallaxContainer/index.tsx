import React, { FC } from 'react';
import cx from 'classnames';

import { CartAndItemsPng } from 'assets/img';
import styles from './styles.module.scss';

type Props = {
  className?: string
};

const ParallaxContainer: FC<Props> = ({ className }) => (
  <div className={cx(styles.container, className)}>
    <div className="base-wrapper">
      <div className="parallax-container">
        <div className="wrapper">
          <img className="background__image" alt="" src={CartAndItemsPng} />
          <img className="middle__image" alt="" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/stars.png" />
          <img className="foreground__image" alt="" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/polygons.png" />
        </div>
      </div>
    </div>
  </div>
);

export default ParallaxContainer;
