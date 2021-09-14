import {
  select, put, takeLatest, call,
} from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { getCratBalance, walletSetState } from 'store/wallet/actions';
import actionTypes from 'store/wallet/actionTypes';
import { createContract } from 'utils';
import erc20Abi from 'appConstants/contracts/erc20Abi.json';
import { cratTokenAddress } from 'appConstants';
import walletsSelector from '../selectors';

function* saga({ type }: ReturnType<typeof getCratBalance>) {
  try {
    yield put(apiActions.request(type));
    const myAddress = yield select(walletsSelector.getProp('address'));
    // @ts-ignore
    const cratTokenContract = yield call(createContract, cratTokenAddress, erc20Abi);

    const balance = yield cratTokenContract.methods.balanceOf(myAddress).call();

    yield put(walletSetState({
      cratBalance: +balance,
    }));

    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.WALLETS_GET_CRAT_BALANCE, saga);
}
