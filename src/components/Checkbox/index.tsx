import React, { FC, ChangeEvent, ReactNode } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type Props = {
  name: string,
  checked?: boolean,
  error?: string,
  label?: string | ReactNode,
  disabled?: boolean,
  className?: string,
  classNameWrap?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
};

const Checkbox: FC<Props> = ({
  name,
  checked = false,
  error = '',
  label = '',
  disabled = false,
  className,
  classNameWrap,
  onChange = () => {},
}) => (
  <div className={cx(styles.wrap, classNameWrap)}>
    <label htmlFor={name} className={cx(styles.checkbox, className)}>
      <input
        type="checkbox"
        disabled={disabled}
        id={name}
        checked={checked}
        className={styles.input}
        onChange={onChange}
      />
      <span className={styles.checkmark} />
      {label && <span className={styles.text}>{label}</span>}
    </label>
    {error && <span className={styles.error}>{error}</span>}
  </div>
);

export default Checkbox;
