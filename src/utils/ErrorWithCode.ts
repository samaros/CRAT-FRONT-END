import { ErrorWithCodeType } from 'types';

class ErrorWithCode extends Error {
  name: string;

  message: string;

  code: number;

  constructor(obj: ErrorWithCodeType) {
    super();

    this.name = obj.name;
    this.message = obj.message;
    this.code = obj.code;
  }
}

export default ErrorWithCode;
