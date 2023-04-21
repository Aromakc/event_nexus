import React from 'react';
import Searchbar from './searchbar';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useNavigate } from 'react-router-dom';

import '../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-container">
          <img src="logo.svg" height="90px" width="90px" className="logo">
            {/* <svg:use xlink:href="logo.svg#logo"></svg:use> */}
          </img>
        </div>
        <div className="searchbar-container">
          <Searchbar />
        </div>
      </div>
      <div className="nav-right">
        <ul className="nav-list">
          <li>
            <button className="createEventBtn" onClick={() => navigate('/create-event')}>
              {' '}
              <spam>Create an Event</spam>
            </button>
          </li>
          <li>
            <div className="notificationsBtn">
              <NotificationsNoneOutlinedIcon style={{ fontSize: '30px' }} />
            </div>
          </li>
          <li>
            {' '}
            <button className="loginBtn">
              {' '}
              <spam>Login</spam>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
