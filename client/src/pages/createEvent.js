import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../slices/posts.slice';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { selectOrganizers } from '../slices/organizers.slice';
import '../styles/createEvent.css';

const CreateEvent = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateStarts, setDateStarts] = useState('');
  const [dateEnds, setDateEnds] = useState('');
  const [time, setTime] = useState('');
  const [online, setOnline] = useState(false);
  const [venue, setVenue] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [banner, setBanner] = useState('');

  // generating cloudinary link when new photo is added
  const cloud_name = 'aromakc38';
  function handleFile(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'eventnexus');
    formData.append('cloud_name', cloud_name);
    fetch(`https://api.cloudinary.com/v1_1/aromakc38/image/upload`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setBanner(data.secure_url))
      .catch((err) => console.log(err));
  }
  const displayBanner = new CloudinaryImage(banner).resize(
    fill().width(200).height(200)
  );

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

  //fetching organizers from the database
  const organizers = useSelector(selectOrganizers);
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
              onChange={() => setOnline(!online)}
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
            {/* mapping organizers and showing lists */}
            <option value='' disabled>
              Select Organizer
            </option>
            {organizers.map((organizer) => (
              <option key={organizer.id} value={organizer.id}>
                {organizer.name}
              </option>
            ))}
          </select>
        </div>
        <div className='formGroup'>
          <label htmlFor='banner'>Banner Image:</label>
          <input
            type='file'
            id='banner'
            accept='image/*'
            onChange={handleFile}
            required
          />
        </div>
        <div className='formGroup flex items-center'>
          {banner && (
            <div>
              <img
                src={banner}
                alt='Selected Banner'
                style={{
                  maxWidth: '200px',
                  maxHeight: '200px',
                  marginTop: '1rem',
                }}
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
