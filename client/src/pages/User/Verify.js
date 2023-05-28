import React, { useState } from 'react';
import KUCC_logo from '../../assets/kucc.png';

export default function Verify() {
  const [club, setClub] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'club':
        setClub(e.target.value);
        break;
      case 'role':
        setRole(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted!', { club, role, description });
  };

  return (
    <div>
      <h1 className='text-7xl text-primary font-bold leading-relaxed '>
        Verification
      </h1>
      <p className='leading-loose text-primary'>
        Fill this form to become a member of a club and post EVENTS
      </p>
      <hr className='text-primary my-10' />

      <div className='flex justify-between'>
        <form className='flex flex-col gap-4 w-1/2' onSubmit={handleSubmit}>
          <label
            htmlFor='club'
            className='flex flex-col gap-2 items-start w-full'
          >
            Club Name:
            <input
              type='text'
              name='club'
              value={club}
              onChange={handleChange}
              placeholder='Name of club'
              className='outline-none transition-all
             duration-300 ease-in-out font-normal text-xl rounded-md w-full'
            />
          </label>
          <label
            htmlFor='role'
            className='flex flex-col gap-2 items-start  w-full'
          >
            Club Role:
            <input
              type='text'
              id='role'
              name='role'
              value={role}
              onChange={handleChange}
              placeholder='Club Role'
              className='outline-none transition-all
              duration-300 ease-in-out font-normal text-xl w-full rounded-md'
            />
          </label>
          <label
            htmlFor='description'
            className='flex flex-col gap-2 items-start w-full'
          >
            Description:
            <textarea
              type='text'
              name='description'
              value={description}
              onChange={handleChange}
              placeholder='Brief description of club'
              className='outline-none transition-all
            duration-300 ease-in-out border border-stone-300 indent-2 py-2 rounded-md font-normal text-xl w-full min-h-[100px]'
            ></textarea>
          </label>
          <button
            type='submit'
            className='py-1 px-4  w-fit rounded-md duration-200 bg-primary text-white hover:bg-secondary active:bg-blue-900'
          >
            Submit Request
          </button>
        </form>

        <div>
          <img src={KUCC_logo} height={200} width={200} />
        </div>
      </div>
    </div>
  );
}
