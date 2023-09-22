import Map from '@/components/map';
import CurrentRequests from '@/components/requests/CurrentRequests';
import { useRef, useState } from 'react';

export default function HomePage() {
  const mapRef = useRef<any>(null);
  const [current, setCurrent] = useState<[number, number]>([12.9716, 77.5946]);
  return (
    <div>
      <Map
        containerRef={mapRef}
        markerPosition={current}
        className='absolute -z-50'
      />
      <div className='absolute right-0 top-0 flex h-screen flex-col items-center overflow-y-scroll bg-slate-300 p-10'>
        <h1 className='pb-5 text-black'>Requests</h1>
        <CurrentRequests mapRef={mapRef} setCurrentLocation={setCurrent} />
      </div>
    </div>
  );
}
