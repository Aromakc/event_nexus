import React, { useState } from 'react';
import '../styles/createEvent.css';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [banner, setBanner] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // handle form submission here (e.g. send data to server)
  };

  return (
    <div className="createEventForm">
      <form className="formContainer" onSubmit={handleFormSubmit}>
        <div className="formGroup">
          <label htmlFor="title">Event Name:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="description">Event Description:</label>
          <textarea
            id="eventDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="formGroup dateTimeSection">
          <div className="formGroupDate">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="formGroupTime">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="formGroup">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Add venue or online"
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="organizer">Organizer:</label>
          <select
            id="eventOrganizer"
            onChange={(e) => setOrganizer(e.target.value)}
            defaultValue="Select your organization"
            value={organizer}
            required
          >
            <option value="Organizer 1">Organizer 1</option>
            <option value="Organizer 2">Organizer 2</option>
          </select>
        </div>
        <div className="formGroup">
          <label htmlFor="banner">Banner Image:</label>
          <input
            type="file"
            id="banner"
            accept="image/*"
            onChange={(e) => setBanner(e.target.files[0])}
            required
          />
        </div>
        <div className="formGroup">
          <button class="button createEventBtn" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
