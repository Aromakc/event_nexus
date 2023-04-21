import React from 'react';
import '../styles/card.css';

const Card = (props) => {
  return (
    <div>
      <div class="card">
        <img src={props.banner} alt="Banner" />
        <div class="card-info">
          <h2 class="card-title">{props.title}</h2>
          <p class="card-date">
            <i class="far fa-calendar-alt"></i> {props.date}
          </p>
            <p class="card-organizer">
            <i class="fas fa-user"></i> {props.organizer}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
