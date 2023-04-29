import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroContent({ id, poster, title, organizer }) {
  return (
    <div className='relative rounded-xl'>
      <Link to={`/event/${id}`}>
        <img
          src={poster}
          className='relative rounded-xl object-contain h-4/5 w-full max-h-[500px]'
        />
        <div className='h-full w-full absolute rounded-xl bg-gradient-to-t from-primary to-transparent to-15% top-0 left-0 right-0 bottom-0'></div>
        <h2 className='absolute text-white text-5xl font-semibold bottom-3 left-10'>
          {title} <span className='text-2xl'>by {organizer}</span>
        </h2>
      </Link>
    </div>
  );
}
