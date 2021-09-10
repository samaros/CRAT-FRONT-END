import React, { useMemo } from 'react';
import { H2 } from 'components/Typography';
import { aboutData } from 'appConstants';
import { Carousel } from 'components';
import styles from './styles.module.scss';
import { AboutComponent } from './components';

const AboutProject = () => {
  const aboutComponents = useMemo(() => aboutData.map((data) => {
    const {
      title,
      body1,
      body2,
      image,
      isRight,
      backgroundColor,
    } = data;

    return (
      <AboutComponent
        key={title}
        title={title}
        body1={body1}
        body2={body2}
        image={image}
        isRight={isRight}
        backgroundColor={backgroundColor}
      />
    );
  }), [aboutData]);

  return (
    <div className={styles.container}>
      <H2 className={styles.text} weight="normal" align="center" color="green">THE REASONS WHY YOU CAN NOT</H2>
      <H2 className={styles.text} weight="normal" align="center" color="green">AFFORD TO MISS THIS OPPORTUNITY <span style={{ fontWeight: 600 }}>NOW</span>!</H2>
      <div className={styles.listAbout}>
        {aboutComponents}
      </div>
      <Carousel
        classNameProp={styles.carouselAbout}
        classNameArrowLeft={styles.arrowLeft}
        classNameArrowRight={styles.arrowRight}
      >
        {aboutComponents}
      </Carousel>
      <H2 className={styles.text} weight="normal" align="center" color="green">WHY WON&rsquo;T YOU WANT TO GRAB MOST OF</H2>
      <H2 className={styles.text} weight="normal" align="center" color="green">THE CRAT TOKENS THAT WILL BE IN</H2>
      <H2 className={styles.text} weight="normal" align="center" color="green">EXISTENCE?</H2>
    </div>
  );
};

export default AboutProject;
