import ResRequest, { IResRequest } from '@/components/ResRequest';

const data: IResRequest[] = [
  {
    name: 'Looking for Meds',
    details: 'Insulin needed',
    location: [1, 2],
    time: new Date(),
  },
];

export default function HomePage() {
  return (
    <div className='mt-5 flex flex-col items-center justify-center gap-4'>
      <h1>Requests</h1>
      {data.map((v, i) => (
        <ResRequest
          key={i}
          name={v.name}
          details={v.details}
          location={v.location}
          time={v.time}
        />
      ))}
    </div>
  );
}
