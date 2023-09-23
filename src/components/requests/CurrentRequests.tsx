import ResRequest, { IResRequest } from '@/components/ResRequest';
import { IAgency } from '@/components/requests/AgencySelector';
import { token } from '@/constant/env';
import axios from '@/lib/api/axios';
import clsxm from '@/lib/clsxm';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface CurrentRequestsProps {
  className?: string;
  mapRef: React.MutableRefObject<any>;
  setCurrentLocation: Dispatch<SetStateAction<[number, number]>>;
}

export default function CurrentRequests({
  className,
  mapRef,
  setCurrentLocation,
}: CurrentRequestsProps) {
  const [data, setData] = useState<IAgency[]>([]);
  useEffect(() => {
    axios.get(`/agencies/assignedto?id=${token?._id ?? ''}`).then((x) => {
      if (x.data) setData(x.data);
    });
  }, []);
  const moveTo = (location: [number, number]) => {
    if (mapRef.current) {
      mapRef.current.panTo(location, { animate: true, duration: 1.5 });
      setCurrentLocation(location);
    }
  };
  return (
    <div className={clsxm(className, 'flex flex-col gap-4')}>
      {data.map((v, i) => (
        <ResRequest
          key={i}
          className='hover:cursor-pointer hover:bg-slate-100'
          name={v.name}
          details={v.address}
          location={v.coordinates}
          onClick={() => {
            moveTo(v.coordinates);
          }}
        />
      ))}
    </div>
  );
}
