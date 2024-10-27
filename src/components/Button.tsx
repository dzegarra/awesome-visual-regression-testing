import { ComponentProps } from 'react';
import clsx from 'clsx';

export const Button = ({className, ...props}: ComponentProps<'button'>) => (
  <button
    className={clsx("bg-blue-400 text-white px-3 py-2 rounded-md text-3xl disabled:bg-blue-200 disabled:cursor-not-allowed", className)}
    {...props}
  />
);
