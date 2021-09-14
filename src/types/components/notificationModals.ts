/* eslint-disable @typescript-eslint/no-explicit-any */
export type NotificationModalType = {
  title1: string,
  title2: string,
  title3: string,
  image: any,
  body1?: string,
  body2?: string,
  body3?: string,
};

export type NotificationModalObjectHelper = {
  [key: string]: {
    [key: string] : NotificationModalType,
  }
};
