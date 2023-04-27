import React, { useState } from 'react';

export default function Verify() {
  const [club, setClub] = useState('KUCC');
  const [description, setDescription] = useState(
    'Kathmandu University Computer Club'
  );

  return (
    <div className='flex flex-col p-4 gap-4'>
      <div className='flex flex-col gap-2 items-start'>
        <label htmlFor='club'>Club Name:</label>
        <input
          type='text'
          name='club'
          placeholder='Name of club'
          className='outline-none transition-all
           duration-300 ease-in-out'
        />
      </div>

      <div className='flex flex-col gap-2 items-start'>
        <label htmlFor='description'>Description:</label>
        <textarea
          type='text'
          name='description'
          placeholder='Brief description of club'
          className='outline-none transition-all
           duration-300 ease-in-out w-1/2 border'
        ></textarea>
      </div>
      <button className='py-1 px-4 border-2 border-blue-500 w-fit rounded-lg bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-900'>
        Submit Request
      </button>
    </div>
  );
}
