/* eslint-disable react/jsx-props-no-spreading */
import React, {
  FC, PropsWithChildren, useCallback, useState,
} from 'react';
import Slider from 'react-slick';
import cx from 'classnames';
import { useWindowSize } from 'hooks';
import { getSlidesNum } from 'utils';
import { Arrow } from 'containers/Main/PresalePlan/components';
import styles from './styles.module.scss';

type Props = {
  classNameArrowLeft?: string,
  classNameArrowRight?: string,
  classNameProp?: string,
};

const SimpleSlider: FC<PropsWithChildren<Props>> = ({
  classNameProp, children, classNameArrowLeft, classNameArrowRight,
}) => {
  const { width } = useWindowSize();

  const isMobile = width < 730;

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function PrevArrow(props: any) {
    const { className, onClick } = props;
    return (
      <Arrow
        className={cx(className, classNameArrowLeft)}
        onClick={onClick}
        direction="left"
      />
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function NextArrow(props: any) {
    const { className, onClick } = props;
    return (
      <Arrow
        className={cx(className, classNameArrowRight)}
        onClick={onClick}
        direction="right"
      />
    );
  }

  const sliderConfig = {
    dots: !isMobile,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesNum(width),
    slidesToScroll: 1,
    dotsClass: styles.slickDots,
    beforeChange: useCallback(
      (oldI: number, newI: number) => setActiveSlideIndex(newI), [activeSlideIndex],
    ),
    customPaging: (i: number) => (
      <div className={cx(styles.indicator, { [styles.active]: i === activeSlideIndex })} />
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return(
    <Slider className={classNameProp} {...sliderConfig}>
      {children}
    </Slider>
  );
};

export default SimpleSlider;
