import { roadMap } from 'appConstants';
import { RoadMapPng } from 'assets/img';
import { Text } from 'components/Typography';
import { Carousel } from 'components';
import React from 'react';
import { RoadMapSegment } from './components';

import styles from './styles.module.scss';

const RoadMap = () => (
  <div className={styles.container}>
    <img className={styles.roadMap} src={RoadMapPng} alt="" />
    <div className={styles.mobileRoadMap}>
      <Text className={styles.title} size="xxl" align="center">ROADMAP</Text>
      <Carousel
        classNameArrowLeft={styles.arrow}
        classNameArrowRight={styles.arrow}
      >
        {roadMap.map((element) => {
          const { quarter, year, body } = element;
          return (
            <RoadMapSegment
              key={body}
              quarter={quarter}
              year={year}
              body={body}
            />
          );
        })}
      </Carousel>
    </div>
  </div>
);

export default RoadMap;
