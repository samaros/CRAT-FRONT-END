import {
  select, put, takeLatest, call,
} from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { approveTokensSpend } from 'store/wallet/actions';
import { signAndBuy } from 'store/wallet/saga/signBuy';
import actionTypes from 'store/wallet/actionTypes';
import { createContract, getTokenAmount } from 'utils';
import { crowdsaleContractAddress } from 'appConstants/contracts';
import erc20Abi from 'appConstants/contracts/erc20Abi.json';
import { notificationModalSetState } from 'store/notificationModal/actions';
import walletsSelector from '../selectors';

function* saga({ type, payload }: ReturnType<typeof approveTokensSpend>) {
  const {
    address, decimals, amount,
  } = payload;
  try {
    yield put(apiActions.request(type));

    yield put(notificationModalSetState({
      isOpen: true,
      type: 'approve',
      result: 'pending',
    }));

    const myAddress = yield select(walletsSelector.getProp('address'));
    // @ts-ignore
    const cratToken = yield call(createContract, address, erc20Abi);

    const allowance = yield call(cratToken.methods.allowance(
      myAddress,
      crowdsaleContractAddress,
    ).call, { from: myAddress });
    console.log(allowance, getTokenAmount(amount, decimals), 123123123);

    if (allowance < getTokenAmount(amount, decimals)) {
      yield call(cratToken.methods.approve(
        crowdsaleContractAddress,
        getTokenAmount(amount, decimals),
      ).send, { from: myAddress });
    }

    yield put(notificationModalSetState({
      isOpen: true,
      type: 'approve',
      result: 'success',
    }));

    yield call(signAndBuy, {
      type: actionTypes.WALLETS_SIGN_BUY,
      payload: {
        tokenAddress: address,
        amountToPay: amount,
      },
    });

    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);

    yield put(notificationModalSetState({
      isOpen: true,
      type: 'approve',
      result: 'reject',
    }));
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.WALLETS_APPROVE_TOKENS_SPEND, saga);
}
