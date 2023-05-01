import React from 'react';
import Card from '../components/card';
import '../styles/home.css';
import Hero from '../components/Hero/Hero';

const Home = () => {
  let thumbnailContent = {
    title: 'Registration for ML Bootcamp',
    date: 'Wed, 16th April',
    location: 'Room 404, Block 9',
    organizer: 'KUCC',
    banner: 'thumbnail1.png',
  };
  let thumbnailContent2 = {
    title: 'Invitation for ‘Let’s Talk About JS’ MeetUp',
    date: 'Thu, 19th April',
    location: 'Room 304, Block 9',
    organizer: 'KUCC',
    banner: 'thumbnail2.png',
  };

  return (
    <div>
      <div className='landingPage_Container'>
        <div className='h-4/5 mt-4 mb-12'>
          <Hero />
        </div>
        <h2>Upcoming Events</h2>
        <hr />
        <div className='card_Container'>
          <Card {...thumbnailContent} />
          <Card {...thumbnailContent2} />
          <Card {...thumbnailContent} />
          <Card {...thumbnailContent} />
        </div>

        <h2> Past Events</h2>
        <hr />
        <div className='card_Container'>
          <Card {...thumbnailContent} />
          <Card {...thumbnailContent2} />
        </div>
      </div>
    </div>
  );
};

export default Home;
