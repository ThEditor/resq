import clsxm from '@/lib/clsxm';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  description: string;
  subtitle: string;
}

export default function ResRequest({
  className,
  title,
  description,
  subtitle,
  ...rest
}: CardProps) {
  return (
    <div
      {...rest}
      className={clsxm(
        className,
        'relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'
      )}
    >
      <div className='p-6'>
        {}
        <h5 className='text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased'>
          {title}
        </h5>
        <p className='block font-mono text-xs leading-relaxed text-gray-700 text-inherit antialiased'>
          {subtitle}
        </p>
        <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
          {description}
        </p>
      </div>
    </div>
  );
}
