import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../slices/posts.slice';
import '../styles/createEvent.css';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateStarts, setDateStarts] = useState('');
  const [dateEnds, setDateEnds] = useState('');
  const [time, setTime] = useState('');
  // const [hasNoVenue, setHasNoVenue] = useState(false);
  const [venue, setVenue] = useState('');
  const [online, setOnline] = useState(false);
  const [organizer, setOrganizer] = useState('');
  const [banner, setBanner] = useState('');

  const dispatch = useDispatch();
  // function to add newpost to the db.json file using redux
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title,
        description,
        dateStarts,
        dateEnds,
        time,
        venue,
        online,
        organizer,
        banner,
      })
    );
    setTitle('');
    setDescription('');
    setDateStarts('');
    setDateEnds('');
    setTime('');
    setVenue('');
    setOnline(false);
    setOrganizer('');
    setBanner('');
  };

  return (
    <div className='createEventForm'>
      <form className='formContainer' onSubmit={handleFormSubmit}>
        <div className='formGroup'>
          <label htmlFor='title'>Event Name:</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='description'>Event Description:</label>
          <textarea
            id='eventDescription'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className='formGroup dateTimeSection'>
          <div className='formGroupDate'>
            <label htmlFor='startDate'>Start Date:</label>
            <input
              type='date'
              id='startDate'
              value={dateStarts}
              onChange={(e) => setDateStarts(e.target.value)}
              required
            />
          </div>
          <div className='formGroupDate'>
            <label htmlFor='endDate'>End Date:</label>
            <input
              type='date'
              id='endDate'
              value={dateEnds}
              onChange={(e) => setDateEnds(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='formGroupTime'>
          <label htmlFor='time'>Start Time:</label>
          <input
            type='time'
            id='time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className='formGroup'>
          <label htmlFor='venue'>Venue:</label>
          <label
            htmlFor='online'
            className='flex items-center gap-2 font-normal'
          >
            <input
              type='checkbox'
              id='online'
              checked={online}
              onClick={() => setOnline(!online)}
            />
            Online
          </label>

          {!online && (
            <input
              type='text'
              id='venue'
              value={venue}
              placeholder='Add venue'
              onChange={(e) => setVenue(e.target.value)}
              required={!online}
            />
          )}
        </div>
        <div className='formGroup'>
          <label htmlFor='organizer'>Organizer:</label>
          <select
            id='eventOrganizer'
            onChange={(e) => setOrganizer(e.target.value)}
            value={organizer}
            required
          >
            <option value='Organizer 1'>Organizer 1</option>
            <option value='Organizer 2'>Organizer 2</option>
          </select>
        </div>
        <div className='formGroup'>
          <label htmlFor='banner'>Banner Image:</label>
          <input
            type='file'
            id='banner'
            accept='image/*'
            onChange={(e) => setBanner(e.target.files[0])}
            required
          />
        </div>
        <div className='formGroup'>
          {banner && (
            <div>
              <img
                src={URL.createObjectURL(banner)}
                alt='Selected Banner'
                style={{ maxWidth: '200px', maxHeight:'200px', marginTop: '1rem' }}
              />
            </div>
          )}
        </div>
        <div className='formGroup'>
          <button className='button createEventBtn' type='submit'>
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
