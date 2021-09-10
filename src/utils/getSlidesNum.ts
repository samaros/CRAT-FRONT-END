export const getSlidesNum = (widthValue: number): number => {
  if (widthValue > 1700) {
    return 6;
  }

  if (widthValue > 1500) {
    return 5;
  }

  if (widthValue > 1200) {
    return 4;
  }

  if (widthValue > 900) {
    return 3;
  }

  if (widthValue > 700) {
    return 2;
  }

  return 1;
};
