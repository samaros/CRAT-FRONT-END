enum Values {
  black,
  white,
  green,
  yellow,
  red,
  gray,
}

enum SizeValues {
  xxxs,
  xxs,
  xs,
  s,
  m,
  l,
  xl,
  xxl,
  xxxl,
  xxxxl,
}

enum WeightValues {
  normal,
  medium,
  bold,
}

enum Aligns {
  center,
  left,
  right,
}

enum HeadingTypes {
  h1,
  h2,
  h3,
  h4,
  h5,
}

export type TextColor = keyof typeof Values;
export type TextSize = keyof typeof SizeValues;
export type TextWeight = keyof typeof WeightValues;
export type TextAlign = keyof typeof Aligns;
export type HeadingType = keyof typeof HeadingTypes;
