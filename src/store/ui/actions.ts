export const request = <T = string, P = never>(defaultType: T, payload?: P) => ({
  type: `${defaultType}_REQUEST`,
  payload,
});

export const success = <T = string, P = never>(defaultType: T, payload?: P) => ({
  type: `${defaultType}_SUCCESS`,
  payload,
});

export const error = <T = string, E = never>(defaultType: T, err?: E) => ({
  type: `${defaultType}_ERROR`,
  payload: err,
  err,
});

export const reset = <T = string>(defaultType: T) => ({
  type: `${defaultType}_RESET`,
});

export default {
  request,
  success,
  error,
  reset,
};
