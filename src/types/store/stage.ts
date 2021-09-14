export type StageType = {
  status: string,
  currentStagePriceUsd: number,
  currentStageNumber: number,
  currentStageDaysLeft: number,
  currentStageTokensSold: number,
  currentStageTokensLimit: number,
  nextStagePriceUsd: number,
};

export type StageState = StageType;
