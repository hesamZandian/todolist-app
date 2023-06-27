import clsx from 'clsx';

interface CheckboxProperties {
  className: string;
  checked: boolean;
}

function Checkbox({ className, checked }: CheckboxProperties) {
  return (
    <input
      type='checkbox'
      className={clsx('form-checkbox', className)}
      checked={checked}
    />
  );
}

export default Checkbox;
