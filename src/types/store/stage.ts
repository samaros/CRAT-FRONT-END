export type CurrentStageType = {
  status: string,
  currentStagePriceUsd: number,
  currentStageNumber: number,
  currentStageDaysLeft: number,
  currentStageTokensSold: number,
  currentStageTokensLimit: number,
  nextStagePriceUsd: number,
};

export type StageType = {
  status: string,
  name: string,
  price: number,
  tokensLimit: string,
};

export type StageState = CurrentStageType & {
  stages: StageType[],
};
