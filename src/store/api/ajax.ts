import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { call, CallEffect, PutEffect } from 'redux-saga/effects';

const client: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
});

export default function* apiSaga(
  requestConfig: AxiosRequestConfig,
): Generator<CallEffect | PutEffect> {
  // eslint-disable-next-line no-useless-catch
  try {
    return yield call<(config: AxiosRequestConfig) => void>(client, requestConfig);
  } catch(err) {
    throw err;
  }
}
