import React from "react";
import clsx from "clsx";

interface CheckboxProps {
  className?: string;
  checked?: boolean;
  onChange?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ className, checked, onChange }) => {
  return (
    <input
      type="checkbox"
      className={clsx(`form-checkbox`, className)}
      onChange={onChange}
      checked={checked}
    />
  );
};

export default Checkbox;
