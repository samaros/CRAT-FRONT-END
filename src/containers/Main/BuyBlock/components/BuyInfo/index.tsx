import { Carousel } from 'components';
import React, { FC } from 'react';
import cx from 'classnames';
import { Token } from 'types';
import { CurrentRates, CurrentPrice, CurrentStage } from './components';
import styles from './styles.module.scss';

type Props = {
  className?: string,
  stage: number,
  daysLeft: number,
  progressMax: number,
  progressCur: number,
  price: number,
  nextStagePrice: number,
  tokens: Token[],
};

const BuyInfo: FC<Props> = ({
  className,
  stage,
  daysLeft,
  progressMax,
  progressCur,
  price,
  nextStagePrice,
  tokens,
}) => (
  <div className={cx(styles.container, className)}>
    <div className={styles.blockInfo}>
      <CurrentStage
        stage={stage}
        daysLeft={daysLeft}
        progressMax={progressMax}
        progressCur={progressCur}
      />
      <CurrentPrice
        price={price}
        nextStagePrice={nextStagePrice}
      />
      <CurrentRates
        data={tokens}
      />
    </div>
    <div className={styles.carouselInfo}>
      <Carousel
        classNameArrowLeft={styles.arrow}
        classNameArrowRight={styles.arrow}
      >
        <CurrentStage
          stage={stage}
          daysLeft={daysLeft}
          progressMax={progressMax}
          progressCur={progressCur}
        />
        <CurrentPrice
          price={price}
          nextStagePrice={nextStagePrice}
        />
        <CurrentRates
          data={tokens}
        />
      </Carousel>
    </div>
  </div>
);

export default BuyInfo;
