import clsx from 'clsx';
import { ComponentProps } from 'react';

type EmojiContainerProps = ComponentProps<'div'>;

export const EmojiContainer = ({
  className,
  ...props
}: EmojiContainerProps) => {
  return (
    <div
      className={clsx(
        'absolute rounded-full flex items-center justify-center text-4xl',
        className
      )}
      {...props}
    />
  );
};
