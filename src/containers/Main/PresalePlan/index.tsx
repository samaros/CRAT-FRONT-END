import React, { useMemo } from 'react';
import { Carousel } from 'components';
import { Text } from 'components/Typography';
import stageSelector from 'store/stage/selectors';
import { useShallowSelector } from 'hooks';
import { StageState, State } from 'types';
import { PresaleSlide } from './components';
import styles from './styles.module.scss';

const PresalePlan = () => {
  const { stages } = useShallowSelector<State, StageState>(stageSelector.getStage);
  const slides = useMemo(() => stages.map((element) => {
    const {
      status, price, tokensLimit,
    } = element;

    return (
      <PresaleSlide
        className={styles.slide}
        key={status}
        title=""
        price={price}
        tokenLimit={tokensLimit}
        status={status}
      />
    );
  }), [stages]);

  return (
    <div className={styles.container}>
      <div className={styles.fadeLeft} />
      <Text className={styles.title} align="center" size="xxl">PRESALE PLAN</Text>
      {stages.length ? (
        <Carousel
          classNameProp={styles.carousel}
          classNameArrowLeft={styles.arrowLeft}
          classNameArrowRight={styles.arrowRight}
        >
          {slides}
        </Carousel>
      ) : null}
      <div className={styles.fadeRight} />
    </div>
  );
};

export default PresalePlan;
