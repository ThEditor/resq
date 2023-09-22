import clsxm from '@/lib/clsxm';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IResRequest {
  name: string;
  details: string;
  location: [number, number];
}

export interface ResRequestProps
  extends IResRequest,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function ResRequest({
  className,
  name,
  details,
  location,
  ...rest
}: ResRequestProps) {
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
          {name}
        </h5>
        <p className='block font-mono text-xs leading-relaxed text-gray-700 text-inherit antialiased'>
          Lat: {location[0]} Long: {location[1]}
        </p>
        <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
          {details}
        </p>
      </div>
    </div>
  );
}
