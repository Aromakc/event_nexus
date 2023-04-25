import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/button.css'
const Button = (props) => {
  const navigate = useNavigate();
  console.log(props);
  return (
    <>
      <button
        className="button ${props.class}"
        onClick={() => navigate(`/${props.link}`)}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
