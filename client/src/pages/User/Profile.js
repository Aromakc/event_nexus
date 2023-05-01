import React, { useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
import Select from 'react-select';
import Card from '../../components/card';
import { MdEdit, MdUpdate } from 'react-icons/md';
export default function Profile() {
  const [editing, setEditing] = useState(false);

  // set this after fetching API later, static for now
  const [name, setName] = useState('Sandesh GC');
  const [phone, setPhone] = useState('9779876543210');
  const [email, setEmail] = useState('gcsandesh01@gamil.com');
  const [club, setClub] = useState('No registered club');
  const [organizer, setOrganizer] = useState(false);
  const [displayPicture, setDisplayPicture] = useState(
    'https://res.cloudinary.com/practicaldev/image/fetch/s--j4nMWL8c--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/852616/b89dcc2b-2b3e-4385-9793-72dfc45f386d.jpg'
  );

  let thumbnailContent = {
    title: 'Registration for ML Bootcamp',
    date: 'Wed, 16th April',
    location: 'Room 404, Block 9',
    organizer: 'KUCC',
    banner: 'thumbnail1.png',
  };

  function handleEdit(event) {
    switch (event.target.name) {
      case 'name':
        console.log('changing name...');
        setName(event.target.value);
        break;
      case 'phone':
        console.log('changing phone...');
        setPhone(event.target.value);
        break;
      case 'email':
        console.log('changing email...');
        setEmail(event.target.value);
        break;
      case 'club':
        console.log('changing club...');
        setClub(event.target.value);
        break;
    }
    // need to modify this function so that every state variable is changed while editing
    // then send a patch request only if something is changed
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
    <main>
      <section className="flex justify-start p-4 gap-4 ">
        <div className="w-2/12 relative">
          <img
            src={displayPicture}
            alt="User"
            className="rounded-full object-contain w-full max-w-[200px] mx-auto max-h-[200px]"
          />
          <button className="w-full border-b-2 py-1 my-4 px-6 bg-background hover:shadow-md rounded-lg transition-all duration-300 absolute top- text-center text-gray-900">
            Change Photo
          </button>
        </div>

        <form
          className="w-5/12 flex gap-4 flex-col mx-4 mr-auto max-w-5xl"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleEdit}
                placeholder="John Doe"
                className="outline-none"
                disabled={!editing}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={handleEdit}
                placeholder="9879876543210"
                className="outline-none"
                disabled={!editing}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEdit}
              placeholder="johndoe@gamil.com"
              className="outline-none"
              disabled={!editing}
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="club">Club</label>
            <input
              type="text"
              name="club"
              value={club}
              onChange={handleEdit}
              placeholder="KUCC"
              className="outline-none"
              disabled={!editing}
            />
          </div>

          <button
            type="button"
            onClick={() => (editing ? handleSubmit() : startEditing())}
            className="ml-auto py-1 px-4 border-2 w-fit rounded-lg bg-primary text-white hover:bg-blue-700 active:bg-blue-900"
          >
            {!editing ? (
              <span className="flex items-center justify-center gap-2">
                <MdEdit />
                Edit
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <MdUpdate />
                Update
              </span>
            )}
          </button>
        </form>
      </section>
      <hr className="flex flex-column w-full border-gray my-4 clear-both" />
      {/* /section to show My Events and drop down to select Ongoing Events Past Events and Upcoming Events. Then the events are listed as shown from card component*/}
      <section className="flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">My Events</h1>
          <div className="w-64">
            <Select
              options={[
                { label: 'All Events', value: 'all' },
                { label: 'Ongoing', value: 'ongoing' },
                { label: 'Upcoming', value: 'upcoming' },
                { label: 'Past', value: 'past' },
              ]}
              defaultValue={{ label: 'Ongoing', value: 'ongoing' }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <Card {...thumbnailContent} />
          </div>
        </div>
      </section>
    </main>
  );
}
