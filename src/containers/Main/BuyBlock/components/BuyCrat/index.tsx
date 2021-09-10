/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useCallback, useState } from 'react';
import { Text } from 'components/Typography';
import cx from 'classnames';
import {
  Button, Card, Input, Select,
} from 'components';
import { CryptoAssetsType } from 'types';
import { cratToken } from 'appConstants';
import styles from './styles.module.scss';
import ImportantAddresses from '../ImportantAddresses';
import { BuyError } from './components';

type Props = {
  className?: string
  balance: string | number,
  tokenData: CryptoAssetsType[],
  defaultToken: CryptoAssetsType,
  selectHandler:(value: CryptoAssetsType) => void,
};

const BuyCrat: FC<Props> = ({
  className, balance, tokenData, defaultToken, selectHandler,
}) => {
  const [spendAmount, setSpendAmount] = useState('');

  const handleSpendAmountChange = useCallback((event) => {
    setSpendAmount(event.target.value);
  }, [spendAmount]);

  const receiveAmount = useCallback(() => (+spendAmount * 157).toString(), [spendAmount]);
  return (
    <Card className={cx(styles.container, className)}>
      <Text align="center" color="green" size="xl">YOU BUY CRAT TOKENS BY</Text>
      <Text align="center" color="green" size="xl">SENDING WETH TO OUR ADDRESS</Text>
      <div className={styles.balance}>
        <Text>
          YOUR CRAT BALANCE <Text tag="span" color="green">{balance}</Text>
        </Text>
      </div>
      <div className={styles.inputMask}>
        <Input
          value={spendAmount}
          name="spendToken"
          label="SPEND"
          onChange={handleSpendAmountChange}
          isBorder={false}
          classNameInput={styles.input}
        />
        <Select
          options={tokenData}
          value={defaultToken}
          hideSelectedOptions
          onChange={selectHandler as any}
          classNameControl={styles.select}
        />
      </div>
      <div className={styles.inputMask}>
        <Input
          value={receiveAmount()}
          disabled
          name="cratToken"
          label="YOU WILL RECEIVE CRAT"
          isBorder={false}
          classNameInput={styles.input}
        />
        <Select
          value={cratToken}
          classNameControl={styles.select}
          disabled
        />
      </div>
      <Button
        color="green"
        className={styles.buyBtn}
        disabled
      >
        <Text size="l" weight="medium" color="white">BUY</Text>
      </Button>
      <BuyError type="error" />
      <BuyError type="info" />
      <BuyError type="success" />
      <ImportantAddresses />
    </Card>
  );
};

export default BuyCrat;
