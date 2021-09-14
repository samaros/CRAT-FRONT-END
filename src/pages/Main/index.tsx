import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Layout, WhitelistModal } from 'containers';
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
import { checkIsWhitelisted, getCratBalance } from 'store/wallet/actions';
import { useShallowSelector } from 'hooks';
import { State, TokensState, WalletState } from 'types';
import { getTokens } from 'store/tokens/actions';
import { getStage } from 'store/stage/actions';

const Main = () => {
  const buyBlockRef = useRef(null);
  const { address, cratBalance } = useShallowSelector<State, WalletState>(walletSelector.getWallet);
  const { data } = useShallowSelector<State, TokensState>(tokensSelector.getTokens);

  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    if (address) {
      dispatch(checkIsWhitelisted({ address }));
      dispatch(getTokens());
      dispatch(getStage());
      dispatch(getCratBalance());
    }
  }, [address]);

  const scrollToBuy = () => {
    // @ts-ignore
    buyBlockRef.current.scrollIntoView();
  };
  return (
    <Layout
      toggleModal={toggleModal}
    >
      <Banner
        scrollToBuy={scrollToBuy}
      />
      <AboutProject />
      <PresalePlan />
      <Buy
        buyBlockRef={buyBlockRef}
        tokens={data}
        cratBalance={cratBalance}
      />
      <RoadMap />
      <WhitelistModal
        isOpen={isModalOpen}
        onClose={toggleModal}
      />
    </Layout>
  );
};
export default Main;
