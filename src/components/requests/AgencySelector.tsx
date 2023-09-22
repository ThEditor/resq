import Card from '@/components/Card';
import axios from '@/lib/api/axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface IAgency {
  name: string;
  address: string;
  agencyType: string;
  coordinates: [number, number];
  available: boolean;
  currentRequest?: string;
}

export interface AgencySelectorProps {
  className?: string;
  setSelectedAgencies: Dispatch<SetStateAction<string[]>>;
}

export default function AgencySelector() {
  const [data, setData] = useState<IAgency[]>([]);
  useEffect(() => {
    (async () => {
      const list: IAgency[] = (await axios.get('/agencies')).data;
      if (!list) return;
      setData(list);
    })();
  });
  return (
    <div className='grid'>
      {data.map((v, i) => (
        <Card
          key={i}
          title={v.name}
          description={v.address}
          subtitle={`${v.agencyType} | Lat: ${v.coordinates[0]} Long: ${v.coordinates[1]}`}
        ></Card>
      ))}
    </div>
  );
}
