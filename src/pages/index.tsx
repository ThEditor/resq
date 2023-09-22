import Map from '@/components/map';
import CurrentRequests from '@/components/requests/CurrentRequests';
import MyRequests from '@/components/requests/MyRequests';
import { useRef, useState } from 'react';

enum Sctn {
  CURRENT,
  MY,
}

export default function HomePage() {
  const mapRef = useRef<any>(null);
  const [current, setCurrent] = useState<[number, number]>([12.9716, 77.5946]);
  const [requestMarkerLocation, setRequestMarkerLocation] = useState<
    [number, number]
  >([0, 0]);
  const [sctn, setSctn] = useState(Sctn.CURRENT);
  return (
    <div>
      <Map
        containerRef={mapRef}
        markerPosition={current}
        requestMarkerLocation={requestMarkerLocation}
        setRequestMarkerLocation={setRequestMarkerLocation}
        onClick={(loc: [number, number]) => setRequestMarkerLocation(loc)}
        className='absolute -z-50'
      />
      <div className='absolute right-0 top-0 flex h-screen min-w-[33%] flex-col items-center gap-4 overflow-y-scroll bg-slate-300 p-10'>
        <Switcher
          isChecked={sctn != Sctn.CURRENT}
          handleCheckboxChange={() => {
            if (sctn == Sctn.CURRENT) setSctn(Sctn.MY);
            else setSctn(Sctn.CURRENT);
          }}
        />
        {sctn == Sctn.CURRENT ? (
          <CurrentRequests mapRef={mapRef} setCurrentLocation={setCurrent} />
        ) : (
          <MyRequests requestMarkerLocation={requestMarkerLocation} />
        )}
      </div>
    </div>
  );
}

function Switcher({
  isChecked,
  handleCheckboxChange,
}: {
  isChecked: boolean;
  handleCheckboxChange: () => void;
}) {
  return (
    <div className='text-black'>
      <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1'>
        <input
          type='checkbox'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded px-[18px] py-2 text-sm font-medium ${
            !isChecked ? 'text-primary bg-[#d5d8de]' : 'text-body-color'
          }`}
        >
          Current Requests
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded px-[18px] py-2 text-sm font-medium ${
            isChecked ? 'text-primary bg-[#d5d8de]' : 'text-body-color'
          }`}
        >
          My Requests
        </span>
      </label>
    </div>
  );
}
