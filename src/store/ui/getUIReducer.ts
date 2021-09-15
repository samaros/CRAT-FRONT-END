/* eslint-disable implicit-arrow-linebreak */
import { UIState, RequestStatus } from '../../types';

const getUIReducer = (initialState: UIState) =>
// TODO: check any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  (state: UIState = initialState, action: any): UIState => {
    const { type } = action;

    if (type === 'RESET_UI') return initialState;

    const matches = /(.*)_(REQUEST|SUCCESS|ERROR|RESET)/.exec(type) as unknown as [undefined, string, RequestStatus];

    if (!matches) return state;

    const [, requestName, requestState] = matches;

    return {
      ...state,
      [requestName]: requestState === RequestStatus.RESET ? RequestStatus.INIT : requestState,
    };
  };

export default getUIReducer;
