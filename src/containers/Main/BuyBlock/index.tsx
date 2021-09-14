/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC, RefObject, useCallback, useEffect, useState,
} from 'react';
import { Text } from 'components/Typography';
import { Button } from 'components';
import {
  StageState, State, Token, WalletState,
} from 'types';
import walletSelector from 'store/wallet/selectors';
import stageSelector from 'store/stage/selectors';
import { useShallowSelector } from 'hooks';
import { cryptoAssetsIcons } from 'appConstants';
import styles from './styles.module.scss';
import {
  ImportantAddresses, CryptoAssets, BuyCrat, BuyInfo,
} from './components';

type Props = {
  buyBlockRef: RefObject<HTMLDivElement>,
  tokens: Token[],
  cratBalance: number,
};

const BuyBlock: FC<Props> = ({
  buyBlockRef, tokens, cratBalance,
}) => {
  const {
    status,
    isWhitelisted,
  } = useShallowSelector<State, WalletState>(walletSelector.getWallet);

  const stage = useShallowSelector<State, StageState>(stageSelector.getStage);

  const [selectedBuyToken, setSelectedBuyToken] = useState({});

  const handleSelectChange = useCallback((value) => {
    setSelectedBuyToken(value);
  }, [selectedBuyToken]);

  const modifyTokenData = tokens.map(({
    address, symbol, decimals, price,
  }) => ({
    icon: cryptoAssetsIcons[symbol.toLocaleLowerCase()],
    value: {
      address,
      decimals,
      price,
    },
    label: symbol,
  }));

  useEffect(() => {
    if (tokens.length) {
      setSelectedBuyToken(modifyTokenData[0]);
    }
  }, [tokens]);
  return (
    <div className={styles.container}>
      <div className={styles.buyContainer}>
        <Text align="center" size="xxl" color="white">BUY NOW WITH</Text>
        <CryptoAssets
          data={tokens}
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
            stage={stage.currentStageNumber}
            daysLeft={stage.currentStageDaysLeft}
            progressMax={stage.currentStageTokensLimit}
            progressCur={stage.currentStageTokensSold}
            price={stage.currentStagePriceUsd}
            nextStagePrice={stage.nextStagePriceUsd}
            className={styles.buyInfo}
            tokens={tokens}
          />
          <div style={{ width: '100%' }} ref={buyBlockRef}>
            <BuyCrat
              balance={cratBalance}
              tokenData={modifyTokenData}
              selectedBuyToken={selectedBuyToken}
              selectHandler={handleSelectChange}
              className={styles.buyLogic}
              isWhitelisted={isWhitelisted}
            />
          </div>
        </div>
      )}
      {status !== 'CONNECTED' && <ImportantAddresses />}
    </div>
  );
};

export default BuyBlock;
