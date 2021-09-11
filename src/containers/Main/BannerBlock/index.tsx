import React, { FC } from 'react';
import { Text } from 'components/Typography';
import { CartAndItemsPng, RocketPng } from 'assets/img';
import { Button } from 'components';
import cx from 'classnames';
import { useScroll } from 'hooks';
import styles from './styles.module.scss';
import { CoinPercent, MaxSupply } from './components';

type Props = {
  scrollToBuy: () => void,
};

const Banner: FC<Props> = ({ scrollToBuy }) => {
  const { scrollY } = useScroll();
  return (
    <>
      <div className={cx(styles.container)}>
        <div className={styles.textAndImage}>
          <div className={styles.textBlock}>
            <Text className={styles.text} size="xxl" color="white">
              <Text className={styles.text} size="xxl" weight="bold" tag="span" color="yellow">CratD2C</Text> Token, the very first
            </Text>
            <Text className={styles.text} size="xxl" color="white">Digital Utility Token Backed with</Text>
            <Text className={styles.text} size="xxl" color="white">Full Transactions on</Text>
            <Text className={styles.text} size="xxl" color="white">
              <Text className={styles.text} size="xxl" weight="bold" tag="span" color="yellow">E-Commerce</Text> Platform.
            </Text>
            <Text className={styles.text} size="xxl" color="white">2Markets - 1Token</Text>
            <Button className={styles.buyBtn} size="big" color="yellow" onClick={scrollToBuy}>
              <Text weight="bold" color="green">BUY CRAT TOKEN</Text>
            </Button>
          </div>
          <div className={styles.imageBlock}>
            <img style={{ transform: `translateY(${scrollY / 7}px)` }} className={styles.cart} src={CartAndItemsPng} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.bottomBlock}>
        <img style={{ transform: `translate(${scrollY / 6}px, -${scrollY / 6}px)` }} src={RocketPng} alt="" className={styles.rocket} />
        <div className={styles.cards}>
          <div style={{ transform: `translateX(${scrollY / 30}px)` }}>
            <MaxSupply className={styles.maxSupply} />
          </div>
          <div style={{ transform: `translateX(-${scrollY / 30}px)` }}>
            <CoinPercent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
