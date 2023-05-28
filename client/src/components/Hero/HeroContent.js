import React from 'react';
import { Link } from 'react-router-dom';
import { selectOrganizerByName } from '../../slices/organizers.slice';
import { useSelector } from 'react-redux';
const EventCarousel = ({
  id,
  banner,
  title,
  organizer,
  dateStarts,
  dateEnds,
  time,
}) => {
  const organizerLogo = useSelector((state) =>
    selectOrganizerByName(state, organizer)
  ).logo;

  return (
    <div className='relative rounded-xl'>
      <div className='flex'>
        <div className='w-1/2 pr-4'>
          <Link to={`/event/${id}`}>
            <img
              src={banner}
              className='relative rounded-xl object-cover h-full w-full'
              alt='Event Banner'
            />
          </Link>
        </div>
        <div className='w-1/2 flex flex-col justify-center bg-gradient-to-tl from-primary to-secondary rounded-xl p-6'>
          <div className='flex items-center mb-4'>
            <img
              src={organizerLogo}
              className='h-[15rem] w-[16rem] rounded-full mr-4 bg-white'
              alt='Organizer Logo'
            />
            <div>
              <h2 className='text-white text-[6rem] font-semibold mb-1'>
                {title}
              </h2>
              <p className='text-white text-4xl'>{organizer}</p>
            </div>
          </div>
          <div className='mt-9 ml-5 flex gap-5'>
            {dateStarts && (
              <p className='text-white text-[2rem] mb-2'>
                From: {dateStarts.toLocaleString()}
              </p>
            )}
            {dateEnds != dateStarts && (
              <p className='text-white text-[2rem] mb-2'>
                To: {dateEnds.toLocaleString()}
              </p>
            )}
          </div>
          <div className='mt-9 ml-5'>
            {time && <p className='text-white text-[2rem]'>Time: {time}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
