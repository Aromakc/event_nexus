import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';

export default function Profile() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form Submitted!');
  }

  return (
    <main className='flex justify-between gap-4'>
      <div className='w-2/12'>
        <img
          src='/public/assets/images/user.jpg'
          alt='User'
          className='rounded-full object-contain'
        />
      </div>

      <form className='w-10/12' onSubmit={handleSubmit}>
        <div className='flex gap-4 max-w-5xl'>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='username'>Name</label>
            <input
              type='text'
              name='username'
              placeholder='John Doe'
              className='outline-none valid:focus:border-b-green-400 invalid:border-b-red-500 border-b-2 border-b-transparent'
            />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='tel'
              name='phone'
              placeholder='+9879876543210'
              className='outline-none focus:border-b-green-400 invalid:border-b-red-500 border-b-2 border-b-transparent'
            />
          </div>
        </div>

        <div className='flex flex-col gap-2 w-full max-w-5xl'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='johndoe@gamil.com'
            className='outline-none valid:focus:border-b-green-400 invalid:border-b-red-500 border-b-2 border-b-transparent'
          />
        </div>

        <div className='flex flex-col gap-2 w-full max-w-5xl'>
          <label htmlFor='club'>Club</label>
          <input
            type=''
            name='club'
            placeholder='KUCC'
            className='outline-none valid:focus:border-b-green-400 invalid:border-b-red-500 border-b-2 border-b-transparent'
          />
        </div>
        <button
          type='submit'
          className='py-1 px-4 border-2 border-blue-500 w-fit rounded-lg bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-900'
        >
          Edit
        </button>
      </form>
    </main>
  );
}
