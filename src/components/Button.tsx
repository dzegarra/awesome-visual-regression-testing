import { ComponentProps } from 'react';
import clsx from 'clsx';

export const Button = ({className, ...props}: ComponentProps<'button'>) => (
  <button
    className={clsx("bg-sky-800 text-white px-3 py-2 rounded-md text-3xl disabled:bg-slate-400 disabled:cursor-not-allowed", className)}
    {...props}
  />
);