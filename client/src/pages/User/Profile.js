import React, { useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';

export default function Profile() {
  const [editing, setEditing] = useState(false);

  // set this after fetching API later, static for now
  const [name, setName] = useState('Sandesh GC');
  const [phone, setPhone] = useState('9779876543210');
  const [email, setEmail] = useState('gcsandesh01@gamil.com');
  const [club, setClub] = useState('React Developers Club');
  const [displayPicture, setDisplayPicture] = useState(
    'https://res.cloudinary.com/practicaldev/image/fetch/s--j4nMWL8c--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/852616/b89dcc2b-2b3e-4385-9793-72dfc45f386d.jpg'
  );

  function handleEdit(event) {
    console.log(event.target.name, event.target.value);
    // set
  }
  function handleSubmit(event) {
    // event.preventDefault();
    setEditing(false);
    console.log('Form Submitted!');
  }

  function startEditing() {
    console.log('editing started');
    setEditing(true);
  }

  return (
    <main className='flex justify-start p-4 gap-4'>
      <div className='w-2/12'>
        <img
          src={displayPicture}
          alt='User'
          className='rounded-full object-contain'
        />
      </div>

      <form
        className='w-5/12 flex gap-4 flex-col mx-4 mr-auto max-w-5xl'
        onSubmit={handleSubmit}
      >
        <div className='flex gap-4'>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={handleEdit}
              placeholder='John Doe'
              className='outline-none'
              disabled={!editing}
            />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='tel'
              name='phone'
              value={phone}
              onChange={handleEdit}
              placeholder='9879876543210'
              className='outline-none'
              disabled={!editing}
            />
          </div>
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleEdit}
            placeholder='johndoe@gamil.com'
            className='outline-none'
            disabled={!editing}
          />
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='club'>Club</label>
          <input
            type='text'
            name='club'
            value={club}
            onChange={handleEdit}
            placeholder='KUCC'
            className='outline-none'
            disabled={!editing}
          />
        </div>

        <button
          type='button'
          onClick={() => (editing ? handleSubmit() : startEditing())}
          className='ml-auto py-1 px-4 border-2 border-blue-500 w-fit rounded-lg bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-900'
        >
          {editing ? 'Update' : 'Edit'}
        </button>
      </form>
    </main>
  );
}
