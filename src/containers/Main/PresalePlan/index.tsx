import React, { useMemo } from 'react';
import { Carousel } from 'components';
import { Text } from 'components/Typography';
import { presalePlan } from 'appConstants';
import styles from './styles.module.scss';
import { PresaleSlide } from './components';

const PresalePlan = () => {
  const slides = useMemo(() => presalePlan.map((element) => {
    const {
      title, price, amount, status,
    } = element;

    return (
      <PresaleSlide
        className={styles.slide}
        key={title}
        title={title}
        price={price}
        amount={amount}
        status={status}
      />
    );
  }), [presalePlan]);

  return (
    <div className={styles.container}>
      <div className={styles.fadeLeft} />
      <Text className={styles.title} align="center" size="xxl">PRESALE PLAN</Text>
      <Carousel
        classNameProp={styles.carousel}
        classNameArrowLeft={styles.arrowLeft}
        classNameArrowRight={styles.arrowRight}
      >
        {slides}
      </Carousel>
      <div className={styles.fadeRight} />
    </div>
  );
};

export default PresalePlan;
