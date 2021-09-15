import { round } from 'lodash';

export function numberFormatter(num: number, digits: number) {
  const si = [
    { value: 1, symbol: '' },
    { value: 1E3, symbol: 'K' },
    { value: 1E6, symbol: 'M' },
    { value: 1E9, symbol: 'G' },
    { value: 1E12, symbol: 'T' },
    { value: 1E15, symbol: 'P' },
    { value: 1E18, symbol: 'E' },
  ];
  let i = si.length - 1;

  while (i > 0) {
    if (num >= si[i].value) {
      break;
    }

    i -= 1;
  }

  const resNumber = num / si[i].value;

  return `${round(resNumber, digits)}${si[i].symbol}`;
}
