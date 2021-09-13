import React, {
  FC, RefObject, useCallback, useEffect, useState,
} from 'react';
import { Text } from 'components/Typography';
import { Button } from 'components';
import { cryptoAssets } from 'appConstants';
import {
  CryptoAssetsType, State, WalletState,
} from 'types';
import walletSelector from 'store/wallet/selectors';
import { useShallowSelector } from 'hooks';
import styles from './styles.module.scss';
import {
  ImportantAddresses, CryptoAssets, BuyCrat, BuyInfo,
} from './components';

type Props = {
  buyBlockRef: RefObject<HTMLDivElement>,
  // tokens: any,
};

const BuyBlock: FC<Props> = ({ buyBlockRef }) => {
  const {
    status,
    isWhitelisted,
  } = useShallowSelector<State, WalletState>(walletSelector.getWallet);

  const [selectedBuyToken, setSelectedBuyToken] = useState<CryptoAssetsType>({
    icon: '',
    label: '',
    value: '',
    rate: '',
  });

  const handleSelectChange = useCallback((value) => {
    setSelectedBuyToken(value);
  }, [selectedBuyToken]);

  useEffect(() => {
    setSelectedBuyToken(cryptoAssets[0]);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.buyContainer}>
        <Text align="center" size="xxl" color="white">BUY NOW WITH</Text>
        <CryptoAssets
          data={cryptoAssets}
          className={styles.cryptoAssets}
        />
        {status !== 'CONNECTED' && (
          <>
            <Button
              icon="wallet"
              iconClassName={styles.walletIcon}
              className={styles.buyBtn}
              size="big"
              color="yellow"
            >
              <Text size="l" align="center" color="green">CONNECT WALLET TO BUY CRAT</Text>
            </Button>
          </>
        )}
        {(status === 'CONNECTED' && !isWhitelisted) && (
          <div className={styles.whitelistBlock}>
            <Text weight="medium" align="center">You are NOT whitelisted for PreSale events!</Text>
            <Text weight="medium" align="center">Whitelist now:</Text>
            <Button
              className={styles.buyBtn}
              size="big"
              color="white"
            >
              <Text size="l" align="center" color="green">WHITELIST</Text>
            </Button>
          </div>

        )}
      </div>
      {(status === 'CONNECTED') && (
        <div className={styles.buyLogicContainer}>
          <BuyInfo
            stage={1}
            daysLeft={10}
            progressMax={500000}
            progressCur={197382}
            price={0.1}
            nextStagePrice={0.15}
            className={styles.buyInfo}
          />
          <div style={{ width: '100%' }} ref={buyBlockRef}>
            <BuyCrat
              balance={909090}
              tokenData={cryptoAssets}
              selectedBuyToken={selectedBuyToken}
              selectHandler={handleSelectChange}
              className={styles.buyLogic}
            />
          </div>
        </div>
      ) }
      {status !== 'CONNECTED' && <ImportantAddresses />}
    </div>
  );
};

export default BuyBlock;
