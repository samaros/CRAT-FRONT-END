enum ColorButton {
  white,
  yellow,
  green,
  transparentWhite,
  transparent,
}

enum SizeButton {
  normal,
  big,
}

export type ButtonColor = keyof typeof ColorButton;
export type ButtonSize = keyof typeof SizeButton;
