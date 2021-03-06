/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useCallback, useState } from 'react';
import { Text } from 'components/Typography';
import cx from 'classnames';
import {
  Button, Card, Input, Select,
} from 'components';
import {
  NotificationModalState, StageState, State, Token,
} from 'types';
import { bnbMaskAddress, cratToken } from 'appConstants';
import { getTokenAmountDisplay, validateOnlyNumbers } from 'utils';
import { useDispatch } from 'react-redux';
import { approveTokensSpend, signBuy } from 'store/wallet/actions';
import NotificationModal from 'containers/NotificationModals';
import notificationModalSelector from 'store/notificationModal/selectors';
import stageSelector from 'store/stage/selectors';
import { useShallowSelector } from 'hooks';
import { notificationModalSetState } from 'store/notificationModal/actions';
import styles from './styles.module.scss';
import ImportantAddresses from '../ImportantAddresses';

type Props = {
  className?: string
  balance: string | number,
  tokenData: any,
  selectedBuyToken: any,
  selectHandler:(value: Token) => void,
  isWhitelisted: boolean,
};

const BuyCrat: FC<Props> = ({
  className, balance, tokenData, selectedBuyToken, selectHandler, isWhitelisted,
}) => {
  const dispatch = useDispatch();

  const {
    isOpen,
    result,
    type,
    transactionHash,
  } = useShallowSelector<State, NotificationModalState>(notificationModalSelector.getModalInfo);

  const {
    currentStagePriceUsd,
    currentStageTokensLimit,
    currentStageTokensSold,
    status,
  } = useShallowSelector<State, StageState>(stageSelector.getStage);

  const closeModal = useCallback(() => {
    dispatch(notificationModalSetState({
      isOpen: false,
      result: '',
      type: '',
      transactionHash: '',
    }));
  }, []);

  const [spendAmount, setSpendAmount] = useState('');

  const receiveAmount = () => {
    let res = 0;
    if (Object.keys(selectedBuyToken)) {
      res = (+spendAmount * +selectedBuyToken?.value?.price) / currentStagePriceUsd;
    }

    // eslint-disable-next-line no-restricted-globals
    return isNaN(res) ? 0 : res;
  };

  const isBuyCratOverflow = (currentStageTokensSold + +receiveAmount()) > currentStageTokensLimit;
  const isButtonActive = !!+spendAmount;

  const handleSpendAmountChange = useCallback((event) => {
    const { value } = event.target;
    if(validateOnlyNumbers(value)) {
      setSpendAmount(event.target.value);
    }
  }, [spendAmount]);

  const approveOrBuy = useCallback(() => {
    const { address, price, decimals } = selectedBuyToken.value;
    if (address === bnbMaskAddress) {
      dispatch(signBuy({
        amount: spendAmount,
        address,
        decimals,
      }));
    } else {
      dispatch(approveTokensSpend({
        address,
        price,
        decimals,
        amount: spendAmount,
      }));
    }
  }, [selectedBuyToken, spendAmount]);

  return (
    <Card className={cx(styles.container, className)}>
      <Text align="center" color="green" size="xl">YOU BUY CRAT TOKENS BY</Text>
      <Text align="center" color="green" size="xl">{`SENDING ${selectedBuyToken.label} TO OUR ADDRESS`}</Text>
      <div className={styles.balance}>
        <Text>YOUR CRAT BALANCE</Text>
        <Text color="green">{`${getTokenAmountDisplay(balance.toString(), 8)} CRAT`}</Text>
      </div>
      <Text size="xxs">Please note that rates are changing constantly and the amount you will finally get can slightly differ from this</Text>
      <div className={styles.inputMask}>
        <Input
          value={spendAmount}
          name="spendToken"
          label="SPEND"
          onChange={handleSpendAmountChange}
          isBorder={false}
          classNameInput={styles.input}
          disabled={status !== 'ACTIVE'}
        />
        <Select
          options={tokenData as any}
          value={selectedBuyToken as any}
          hideSelectedOptions
          onChange={selectHandler as any}
          classNameControl={styles.select}
          // disabled={status !== 'ACTIVE'}
        />
      </div>
      <div className={styles.inputMask}>
        <Input
          value={receiveAmount().toString()}
          disabled
          name="cratToken"
          label="YOU WILL RECEIVE CRAT"
          isBorder={false}
          className={styles.inputWrap}
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
        disabled={isBuyCratOverflow || !isButtonActive || !isWhitelisted}
        onClick={approveOrBuy}
      >
        <Text size="l" weight="medium" color="white">BUY</Text>
      </Button>
      <ImportantAddresses />
      {isOpen && (
        <NotificationModal
          isOpen={isOpen}
          type={type}
          result={result}
          onClose={closeModal}
          transactionHash={transactionHash || ''}
        />
      )}
    </Card>
  );
};

export default BuyCrat;
