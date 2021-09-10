import React, { useRef } from 'react';
import { Layout } from 'containers';
import {
  Banner,
  AboutProject,
  PresalePlan,
  Buy,
  RoadMap,
} from 'containers/Main';

const Main = () => {
  const buyBlockRef = useRef(null);

  const scrollToBuy = () => {
    // @ts-ignore
    buyBlockRef.current.scrollIntoView();
  };
  return (
    <Layout>
      <Banner
        scrollToBuy={scrollToBuy}
      />
      <AboutProject />
      <PresalePlan />
      <Buy
        buyBlockRef={buyBlockRef}
      />
      <RoadMap />
    </Layout>
  );
};
export default Main;
