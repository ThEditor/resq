import Map from '@/components/map';
import { IAgency } from '@/components/requests/AgencySelector';
import CurrentRequests from '@/components/requests/CurrentRequests';
import MyRequests from '@/components/requests/MyRequests';
import { useRef, useState } from 'react';
import Modal from 'react-modal';

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
  const handleSubmit = (e: any) => {
    e.preventDefault();
    closeModal();
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
          <MyRequests />
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
          <h3>Create request for {agency?.name}</h3>
          <input placeholder='Name' required />
          <input placeholder='Address' required />
          <label className='block text-sm font-medium'>
            Request uses the current red marker location{' '}
            {'(Double Click on Map to select location)'}.
          </label>
          <button
            className='select-none rounded-lg bg-green-500 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            type='submit'
            data-ripple-light='true'
          >
            Create
          </button>
        </form>
      </Modal>
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
