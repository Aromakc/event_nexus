import React from 'react';
import '../styles/card.css';
import { useNavigate } from 'react-router-dom';
const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className='card' onClick={() => navigate(`/event/${props.id}`)}>
      <img src={props.banner} alt='Banner' />
      <div className='card-info'>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-date'>
          <i className='far fa-calendar-alt'></i> {props.dateStarts}
        </p>
        <p className='card-organizer'>
          <i className='fas fa-user'></i> {props.organizer}
        </p>
      </div>
    </div>
  );
};


export default Card;
