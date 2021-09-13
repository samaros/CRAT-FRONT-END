export type StageType = {
  status: string,
  currentStagePrice: number,
  currentStageNumber: number,
  currentStageDaysLeft: number,
  currentStageTokenSold: string,
  currentStageTokenLimit: string,
  nextStagePriceUsd: number,
};

export type StageState = {
  stage: StageType,
} | {};
