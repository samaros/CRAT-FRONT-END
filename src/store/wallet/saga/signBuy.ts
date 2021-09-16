/* eslint-disable @typescript-eslint/naming-convention */
import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';
import crowdsaleAbi from 'appConstants/contracts/crowdsaleAbi.json';
import apiActions from 'store/api/actions';
import { bnbMaskAddress, crowdsaleContractAddress, URL } from 'appConstants';
import { signBuy } from 'store/wallet/actions';
import walletSelector from 'store/wallet/selectors';
import actionTypes from 'store/wallet/actionTypes';
import ajax from 'store/api/ajax';
import { notificationModalSetState } from 'store/notificationModal/actions';
import { getTokenAmount, createContract } from 'utils';

export function* signAndBuy({ type, payload }: ReturnType<typeof signBuy>) {
  const { address, amount, decimals } = payload;
  try {
    yield put(apiActions.request(type));

    yield put(notificationModalSetState({
      isOpen: true,
      type: 'send',
      result: 'pending',
    }));

    const myAddress = yield select(walletSelector.getProp('address'));
    // @ts-ignore
    const crowdsaleContract = yield call(createContract, crowdsaleContractAddress, crowdsaleAbi);

    const response = yield call(ajax, {
      method: 'post',
      url: URL.wallet.signBuy,
      data: {
        token_address: address,
        amount_to_pay: getTokenAmount(amount, +decimals),
      },
    });

    const {
      data: {
        token_address,
        amount_to_pay,
        amount_to_receive,
        signature_expiration_timestamp,
        signature,
      },
    } = response;

    const sendValue = token_address === bnbMaskAddress ? amount_to_pay : 0;
    let gasBurn = 0;

    if (sendValue) {
      gasBurn = yield call(crowdsaleContract.methods.buy(
        token_address,
        amount_to_pay,
        amount_to_receive,
        signature_expiration_timestamp,
        signature,
      ).estimateGas, { from: myAddress, value: sendValue });
    }

    const txReceipt = yield call(crowdsaleContract.methods.buy(
      token_address,
      amount_to_pay,
      amount_to_receive,
      signature_expiration_timestamp,
      signature,
    ).send, { from: myAddress, value: sendValue, gas: gasBurn });

    const { transactionHash } = txReceipt;

    yield put(notificationModalSetState({
      isOpen: true,
      type: 'send',
      result: 'success',
      transactionHash,
    }));
    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);

    yield put(notificationModalSetState({
      isOpen: true,
      type: 'send',
      result: 'reject',
    }));
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.WALLETS_SIGN_BUY, signAndBuy);
}
