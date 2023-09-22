import { useState } from 'react';
import Modal from 'react-modal';

export interface MyRequestsProps {
  className?: string;
  requestMarkerLocation?: [number, number];
}

export default function MyRequests({
  className,
  requestMarkerLocation,
}: MyRequestsProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const tagOptions = ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5'];

  const handleTagChange = (e: any) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option: { value: string }) => option.value
    );
    setSelectedTags(selectedOptions);
    console.log(selectedOptions);
  };
  return (
    <div>
      <button
        onClick={() => openModal()}
        className='flex items-center space-x-2 rounded-full bg-white px-4 py-2 text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M12 4v16m8-8H4'
          ></path>
        </svg>
        <span>Add</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <button onClick={closeModal}>close</button>
        <form className='flex flex-col gap-4 text-black'>
          <h3>Create a new Request</h3>
          <input placeholder='Name' />
          <input placeholder='Address' />
          <label htmlFor='tags' className='block text-sm font-medium'>
            Select Agency Type {'(Hold Control/Shift for multiple)'}:
          </label>
          <select
            id='tags'
            name='tags'
            multiple
            className='min-h-[10rem] w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none'
            value={selectedTags}
            onChange={handleTagChange}
          >
            {tagOptions.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <label className='block text-sm font-medium'>
            Request uses the current marker location{' '}
            {'(Click on Map to select location)'}.
          </label>
        </form>
      </Modal>
    </div>
  );
}
