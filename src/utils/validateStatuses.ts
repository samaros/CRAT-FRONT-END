import { validStatuses, errorStatuses } from 'appConstants/resCodes';

export const validateStatus = (
  status: number,
) => [...validStatuses, ...errorStatuses].includes(status);
