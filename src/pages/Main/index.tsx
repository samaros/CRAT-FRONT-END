import React, { useEffect, useRef } from 'react';
import { Layout } from 'containers';
import {
  Banner,
  AboutProject,
  PresalePlan,
  Buy,
  RoadMap,
} from 'containers/Main';
import walletSelector from 'store/wallet/selectors';
import tokensSelector from 'store/tokens/selectors';
import { useDispatch } from 'react-redux';
import { checkIsWhitelisted } from 'store/wallet/actions';
import { useShallowSelector } from 'hooks';
import { State, TokensState, WalletState } from 'types';
import { getTokens } from 'store/tokens/actions';
import { getStage } from 'store/stage/actions';

const Main = () => {
  const buyBlockRef = useRef(null);
  const { address } = useShallowSelector<State, WalletState>(walletSelector.getWallet);
  const tokens = useShallowSelector<State, TokensState>(tokensSelector.getTokens);
  console.log(tokens);
  const dispatch = useDispatch();

  useEffect(() => {
    if (address) {
      dispatch(checkIsWhitelisted({ address }));
      dispatch(getTokens());
      dispatch(getStage());
    }
  }, [address]);

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
        // tokens={tokens}
      />
      <RoadMap />
    </Layout>
  );
};
export default Main;
