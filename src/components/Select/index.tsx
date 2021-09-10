/* eslint-disable react/jsx-props-no-spreading,
@typescript-eslint/no-explicit-any,
react/destructuring-assignment */
import React, { FC, useCallback, useMemo } from 'react';
import RSelect, {
  components as component,
  ControlProps,
  OptionProps,
  PlaceholderProps,
  MenuProps,
  IndicatorContainerProps,
} from 'react-select';
import cx from 'classnames';
import { Text, Icon } from '..';
import {
  SelectProps,
  OptionType,
  SelectSize,
  SelectColor,
} from '../../types';
import styles from './styles.module.scss';

const ROOT = document.querySelector('body');

type Props = {
  size?: SelectSize
  color?: SelectColor
} & SelectProps;

const Select: FC<Props> = ({
  name,
  options,
  value,
  placeholder = '',
  onChange = () => {},
  label = '',
  customLabel = undefined,
  error = '',
  withErrorText = true,
  disabled,
  closeMenuOnSelect,
  hideSelectedOptions,
  controlShouldRenderValue,
  isClearable = false,
  isSearchable = false,
  isMulti = false,
  customStyles = {},
  classNameSelect = '',
  classNameControl = '',
  classNameOption = '',
  classNameOptionText = '',
  classNamePlaceholder = '',
  classNameMenuList = '',
  classNameMenu = '',
  classNameIndicatorsContainer = '',
  classNameDropdownIndicator = '',
  classNameValueContainer = '',
  classNameSingleValue = '',
  classNameLabel = '',
  classNameSelectWithErrorWrap = '',
  className,
  onMenuOpen,
  onMenuClose,
  withPortal = false,
  menuPortalTarget,
  components,
  size = 'm',
  color = 'light',
}) => {
  const Control = useCallback((props: ControlProps<OptionType, boolean>) => (
    <component.Control
      {...props}
      className={cx(
        styles.control,
        styles[color],
        styles[size],
        props.isFocused && styles.focused,
        props.menuIsOpen && styles.open,
        error && styles.errorControl,
        classNameControl,
      )}
    />
  ), [classNameControl, error]);

  const Option = useCallback((props: OptionProps<OptionType, boolean>) => (
    <component.Option
      {...props}
      className={cx(
        styles.option,
        styles[color],
        props.isSelected && styles.selected,
        props.isFocused && styles.focused,
        classNameOption,
      )}
    >
      {props.data.icon && <img src={props.data.icon} alt="icon" className={styles.iconOption} />}
      <Text {...props} tag="span" color="gray" weight="medium" className={cx(styles.optionText, classNameOptionText)} />
    </component.Option>
  ), [classNameOption]);

  const Placeholder = useCallback((props: PlaceholderProps<OptionType, boolean>) => (
    <Text
      {...props}
      className={cx(styles.placeholder, classNamePlaceholder)}
      tag="span"
      color="gray"
    />
  ), [classNamePlaceholder]);

  const MenuList = useCallback((props: MenuProps<OptionType, boolean>) => (
    <component.MenuList
      {...props}
      maxHeight={props.maxMenuHeight}
      className={cx(styles.menuList, classNameMenuList)}
    />
  ), [classNameMenuList]);

  const Menu = useCallback((props: MenuProps<OptionType, boolean>) => (
    <component.Menu {...props} className={cx(styles.menu, styles[color], classNameMenu)} />
  ), [classNameMenu]);

  const ValueContainer = useCallback((props: any) => (
    <component.ValueContainer
      {...props}
      className={cx(styles.valueContainer, classNameValueContainer)}
    />
  ), [classNameValueContainer]);

  const SingleValue = useCallback((props: any) => (
    <component.SingleValue
      {...props}
      className={cx(styles.singleValue, classNameSingleValue, disabled && styles.disabled)}
    >
      {props.data.icon && <img src={props.data.icon} alt="icon" className={styles.iconOption} />}
      {props.children}
    </component.SingleValue>
  ), [classNameSingleValue]);

  const IndicatorsContainer = useCallback((props: IndicatorContainerProps<OptionType, boolean>) => (
    <component.IndicatorsContainer
      {...props}
      className={cx(styles.indicatorsContainer, classNameIndicatorsContainer)}
    />
  ), [classNameIndicatorsContainer]);

  const DropdownIndicator = useCallback((props: any) => (
    <Icon
      {...props}
      icon="dropdown"
      className={cx(
        disabled && styles.disabled,
        styles.dropdownIndicator,
        props.selectProps.menuIsOpen && styles.open,
        classNameDropdownIndicator,
      )}
    />
  ), [classNameDropdownIndicator]);

  const NoOptionsMessage = useCallback(() => (
    <Text
      className={styles.noOptionsMessage}
      align="center"
      color="black"
    >
      Nothing found
    </Text>
  ), []);

  const menuPortalTargetInfo = withPortal
    ? menuPortalTarget || ROOT
    : null;

  const filterOptions = useMemo(() => options
    ?.filter(({ value: optionValue }) => optionValue !== value?.value), [options, value]);

  return (
    <div className={cx(styles.selectWrap, className)}>
      {customLabel}
      {(label && !customLabel) && (
        <Text
          className={cx(
            styles.label,
            styles[size],
            disabled && styles.disabled,
            classNameLabel,
          )}
          size={size === 's' ? 's' : 'm'}
          tag="span"
          color="black"
          weight="medium"
        >
          {label}
        </Text>
      )}

      <div className={cx(styles.selectWithErrorWrap, classNameSelectWithErrorWrap)}>
        <RSelect
          components={{
            Option: components?.Option || Option,
            Control: components?.Control || Control,
            IndicatorSeparator: components?.IndicatorSeparator || null,
            IndicatorsContainer: components?.IndicatorsContainer || IndicatorsContainer,
            Placeholder: components?.Placeholder || Placeholder,
            Menu: components?.Menu || Menu,
            ValueContainer: components?.ValueContainer || ValueContainer,
            /* @ts-ignore */
            MenuList: components?.MenuList || MenuList,
            DropdownIndicator: components?.DropdownIndicator || DropdownIndicator,
            SingleValue: components?.SingleValue || SingleValue,
            NoOptionsMessage,
          }}
          isDisabled={disabled}
          options={filterOptions}
          closeMenuOnSelect={closeMenuOnSelect}
          hideSelectedOptions={hideSelectedOptions}
          controlShouldRenderValue={controlShouldRenderValue}
          value={value}
          name={name}
          placeholder={placeholder}
          className={cx(
            styles.select,
            error && styles.error,
            disabled && styles.disabled,
            classNameSelect,
          )}
          onChange={onChange}
          styles={{ ...customStyles }}
          menuPortalTarget={menuPortalTargetInfo}
          onMenuOpen={onMenuOpen}
          onMenuClose={onMenuClose}
          isMulti={isMulti}
          isClearable={isClearable}
          isSearchable={isSearchable}
        />

        {error && withErrorText && (
          <Text
            size="xxs"
            color="red"
            align="right"
            className={styles.errorText}
          >
            {error}
          </Text>
        )}
      </div>

    </div>
  );
};

export default Select;
