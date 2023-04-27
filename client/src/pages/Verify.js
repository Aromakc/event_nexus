import React from 'react';

export default function Verify() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2 items-end'>
        <label htmlFor='club'>Club Name:</label>
        <input
          type='text'
          name='club'
          placeholder='KUCC'
          className='outline-none border-b-2 focus:border-b-green-500 invalid:border-b-red-500 transition-all
           duration-300 ease-in-out'
        />
      </div>
      <button className='py-1 px-4 border-2 border-blue-500 w-fit rounded-lg bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-900'>
        Submit Request
      </button>
    </div>
  );
}
