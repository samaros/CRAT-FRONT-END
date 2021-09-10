export const validateOnlyNumbers = (value: string) => {
  // eslint-disable-next-line no-restricted-globals
  if (!value.match(/^\d+(\.)?(\d+)?$|^$/) || value === '00') {
    return false;
  }

  return true;
};
