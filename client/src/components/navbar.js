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
          {/* <img src="logo.svg" height="90px" width="90px" className="logo"> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.91 112.89">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <text
                  transform="translate(4.53 45.98) scale(1.01 1)"
                  font-size="54.09"
                  font-family="Fenway-Regular, Fenway"
                  style={{ isolation: 'isolate' }}
                >
                  Event
                </text>
                <text
                  transform="matrix(0.97, -0.03, 0.04, 1, 24.96, 84.23)"
                  font-size="44.04"
                  font-family="Fenway-Regular, Fenway"
                  style={{ isolation: 'isolate' }}
                >
                  N
                </text>
                <text
                  transform="matrix(0.97, -0.03, 0.04, 1, 64.22, 84.23)"
                  font-size="54.13"
                  font-family="Fenway-Regular, Fenway"
                  style={{ isolation: 'isolate' }}
                >
                  exus
                </text>
              </g>
            </g>
          </svg>
        </div>
        <div className="searchbar-container">
          <Searchbar />
        </div>
      </div>
      <div className="nav-right">
        <ul className="nav-list">
          <li>
            <button
              className="createEventBtn"
              onClick={() => navigate('/create-event')}
            >
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
