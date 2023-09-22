import Card from '@/components/Card';
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
    <Card
      {...rest}
      className={clsxm(
        className,
        'relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'
      )}
      title={name}
      subtitle={`Lat: ${location[0]} Long: ${location[1]}`}
      description={details}
    />
  );
}
