/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { toast, ToastOptions } from 'react-toastify';
import { Toastify } from 'components';
import type { ToastifyProps } from '../types';

export default function setNotification(props: ToastifyProps, options?: ToastOptions) {
  toast[props.type](<Toastify {...props} />, options);
}
