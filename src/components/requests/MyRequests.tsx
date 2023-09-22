export default function MyRequests() {
  const handleAdd = () => {};
  return (
    <div>
      <button
        onClick={handleAdd}
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
    </div>
  );
}
