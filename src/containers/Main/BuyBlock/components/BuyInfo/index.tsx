import { Carousel } from 'components';
import React, { FC } from 'react';
import cx from 'classnames';
import { StageState, State, Token } from 'types';
import stageSelector from 'store/stage/selectors';
import { useShallowSelector } from 'hooks';
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
}) => {
  const {
    status,
  } = useShallowSelector<State, StageState>(stageSelector.getStage);
  return(
    <div className={cx(styles.container, className)}>
      <div className={styles.blockInfo}>
        {status === 'ACTIVE' && (
          <>
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
          </>
        )}
        <CurrentRates
          data={tokens}
        />
      </div>
      <div className={styles.carouselInfo}>
        <Carousel
          classNameArrowLeft={styles.arrow}
          classNameArrowRight={styles.arrow}
        >
          {status === 'ACTIVE' && (
          <>
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
          </>
          )}
          <CurrentRates
            data={tokens}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default BuyInfo;
