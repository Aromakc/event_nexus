import React, { useState } from 'react';
import '../styles/createEvent.css';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [banner, setBanner] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // handle form submission here (e.g. send data to server)
  };


  return (
    <div className="create-event-form">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="organizer">Organizer:</label>
          <select
            id="organizer"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
            required
          >
            <option value="" selected disabled>Select your organization</option>
            <option value="Organizer 1">Organizer 1</option>
            <option value="Organizer 2">Organizer 2</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="banner">Banner Image:</label>
          <input
            type="file"
            id="banner"
            accept="image/*"
            onChange={(e) => setBanner(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
