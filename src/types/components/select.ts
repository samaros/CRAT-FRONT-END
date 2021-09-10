import { ReactElement, CSSProperties } from 'react';
import { Props as ReactSelectProps } from 'react-select';

type CustomStyle = {
  [key: string]: string
};

type StyleFunction = (provided: CustomStyle, state: CSSProperties) => CustomStyle;

type CustomStyles = {
  [key: string]: StyleFunction,
};

export type OptionType = {
  label: string,
  value: string,
  icon?: string,
};

export type SelectProps = {
  label?: string,
  customLabel?: ReactElement,
  error?: string,
  value?: OptionType,
  withErrorText?: boolean,
  disabled?: boolean,
  customStyles?: CustomStyles,
  classNameSelect?: string,
  classNameControl?: string,
  classNameOption?: string,
  classNamePlaceholder?: string,
  classNameMenuList?: string,
  classNameMenu?: string,
  classNameIndicatorsContainer?: string,
  classNameDropdownIndicator?: string,
  classNameValueContainer?: string,
  classNameSingleValue?: string,
  classNameLabel?: string,
  withPortal?: boolean,
} & ReactSelectProps<OptionType, boolean>;

enum SizeSelect {
  s,
  m,
  l,
}

enum ColorSelect {
  light,
  dark,
}

export type SelectSize = keyof typeof SizeSelect;
export type SelectColor = keyof typeof ColorSelect;
