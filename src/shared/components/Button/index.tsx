import { ButtonHTMLAttributes } from 'react';
/* eslint-disable react/jsx-props-no-spreading */
function Button({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest} type='button'>
      {children}
    </button>
  );
}

export default Button;
