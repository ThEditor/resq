import clsxm from '@/lib/clsxm';

export interface IResRequest {
  name: string;
  details: string;
  location: [number, number];
  time: Date;
}

export interface ResRequestProps extends IResRequest {
  className?: string;
}

export default function ResRequest({
  className,
  name,
  details,
  location,
  time,
}: ResRequestProps) {
  return (
    <div
      className={clsxm(
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
      <div className='flex items-center gap-4 p-6 pt-0'>
        <button
          className='select-none rounded-lg bg-green-500 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          type='button'
          data-ripple-light='true'
        >
          Accept
        </button>
      </div>
    </div>
  );
}
