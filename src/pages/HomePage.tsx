import Map from '@/components/map';
import { IAgency } from '@/components/requests/AgencySelector';
import CurrentRequests from '@/components/requests/CurrentRequests';
import MyRequests from '@/components/requests/MyRequests';
import { useRef, useState } from 'react';
import { Sctn, Switcher } from '.';

export default function HomePage() {
  const mapRef = useRef<any>(null);
  const [current, setCurrent] = useState<[number, number]>([12.9716, 77.5946]);
  const [requestMarkerLocation, setRequestMarkerLocation] = useState<
    [number, number]
  >([0, 0]);
  const [sctn, setSctn] = useState(Sctn.CURRENT);
  const [agency, setAgency] = useState<IAgency | null>(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  const handleOnSelect = (agency: IAgency) => {
    setAgency(agency);
    openModal();
  };
  return (
    <div>
      <Map
        containerRef={mapRef}
        markerPosition={current}
        requestMarkerLocation={requestMarkerLocation}
        setRequestMarkerLocation={setRequestMarkerLocation}
        handleOnSelect={handleOnSelect}
        onClick={(loc: [number, number]) => setRequestMarkerLocation(loc)}
        className='absolute -z-50'
      />
      <div className='absolute bottom-4 right-4 top-4 flex min-w-[33%] flex-col items-center gap-4 overflow-y-scroll rounded-3xl bg-slate-300 p-5'>
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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <button onClick={closeModal}>close</button>
        <form
          className='flex flex-col gap-4 text-black'
          onSubmit={handleSubmit}
        >
          <h3>Create a new Request</h3>
          <input placeholder='Name' />
          <input placeholder='Address' />
          <label htmlFor='tags' className='block text-sm font-medium'>
            Select Agency Type {'(Hold Control/Shift for multiple)'}:
          </label>
          <label className='block text-sm font-medium'>
            Request uses the current marker location{' '}
            {'(Double Click on Map to select location)'}.
          </label>
          <button type='submit'>Create</button>
        </form>
      </Modal>
    </div>
  );
}
