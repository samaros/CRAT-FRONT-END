import React, {
  FC, ChangeEvent, FocusEvent, PropsWithChildren,
} from 'react';
import cx from 'classnames';
import { Icon, Text } from '..';
import styles from './styles.module.scss';

type Props = {
  id?: string,
  type?: 'text' | 'number' | 'password',
  color?: 'dark' | 'light',
  label?: string,
  positionLabel?: 'top' | 'left'
  name: string,
  value?: string,
  placeholder?: string,
  className?: string,
  classNameInput?: string,
  error?: boolean | string,
  disabled?: boolean,
  isCorrect?: boolean | '',
  autoComplete?: 'off' | 'on',
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void,
  required?: boolean,
  isBorder?: boolean,
};

const Input:FC<PropsWithChildren<Props>> = ({
  id,
  type = 'text',
  color = 'dark',
  label,
  positionLabel = 'left',
  name,
  value,
  placeholder,
  className,
  classNameInput,
  error,
  disabled = false,
  isCorrect = false,
  autoComplete = 'off',
  onChange = () => {},
  onBlur = () => {},
  required,
  children,
  isBorder = true,
}) => (
  <div className={cx(styles.wrap, className)}>
    <label
      htmlFor={id}
      className={cx(
        styles.label,
        styles[positionLabel],
      )}
    >
      {label && (
        <Text
          tag="span"
          color="black"
          size="xs"
          className={cx(
            styles.labelText,
            styles[positionLabel],
          )}
        >
          {label}
        </Text>
      )}
      <div
        className={cx(
          styles.inputWrap,
          required && styles.required,
          {
            [styles.disabled]: disabled,
            [styles.border]: isBorder,
          },
        )}
      >
        <input
          id={id || name}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          className={cx(
            styles.input,
            styles[color],
            error && styles.error,
            (error || isCorrect) && styles.bigRightPadding,
            classNameInput,
          )}
          onChange={onChange}
          onBlur={onBlur}
        />
        {children}
        {error && (
          <Icon
            icon="cross"
            className={cx(styles.icon, styles.iconError)}
          />
        )}
        {isCorrect && !error && (
          <Icon
            icon="checkmark"
            className={cx(styles.icon, styles.iconCorrect)}
          />
        )}
      </div>
    </label>
    {error && typeof error === 'string' && (
      <span className={styles.textError}>
        {error}
      </span>
    )}
  </div>
);

export default Input;
