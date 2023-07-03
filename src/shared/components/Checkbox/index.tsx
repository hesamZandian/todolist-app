/* eslint-disable react/require-default-props */
import { ChangeEvent } from 'react';
import clsx from 'clsx';

interface CheckboxProperties {
  id?: string;
  className: string;
  checked: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ id, className, checked, onChange }: CheckboxProperties) {
  return (
    <input
      type='checkbox'
      id={id}
      className={clsx('form-checkbox', className)}
      checked={checked}
      onChange={onChange}
    />
  );
}

export default Checkbox;
