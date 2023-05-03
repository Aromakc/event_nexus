import React from 'react';
import Card from '../components/card';
import Hero from '../components/Hero/Hero';

const Home = () => {
  let thumbnailContent = {
    id: 1,
    title: 'Registration for ML Bootcamp',
    date: 'Wed, 16th April',
    location: 'Room 404, Block 9',
    organizer: 'KUCC',
    banner: 'thumbnail1.png',
  };
  let thumbnailContent2 = {
    id: 2,
    title: 'Invitation for ‘Let’s Talk About JS’ MeetUp',
    date: 'Thu, 19th April',
    location: 'Room 304, Block 9',
    organizer: 'KUCC',
    banner: 'thumbnail2.png',
  };

  return (
    <main>
      <div className='px-[5rem] py-2 bg-background'>
        <div className='h-4/5 mt-4 mb-12'>
          <Hero />
        </div>
        <hr className='border-t-2 border-gray my-4' />
        <h2 className='text-3xl font-semibold text-zinc-700 my-10'>
          Upcoming Events
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
          <Card {...thumbnailContent} />
          <Card {...thumbnailContent2} />
          <Card {...thumbnailContent} />
          <Card {...thumbnailContent} />
          <Card {...thumbnailContent} />
        </div>

        <hr className='border-t-2 border-gray my-4' />
        <h2 className='text-3xl font-semibold text-zinc-700 my-10'>
          {' '}
          Past Events
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
          <Card {...thumbnailContent} />
          <Card {...thumbnailContent2} />
        </div>
      </div>
    </main>
  );
};

export default Home;
