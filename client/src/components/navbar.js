import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/auth.slice';

import '../styles/navbar.css';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Searchbar from './searchbar';
import { LoginButton, LogoutButton } from './login';
import UserProfile from './userProfile';

const Navbar = () => {
  //user state from auth slice
  const user = useSelector(selectUser);

  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <Link to='/' className='logo-container cursor-pointer'>
          <img src='/logo.svg' height='90px' width='90px' className='logo' />
        </Link>
        <div className='searchbar-container'>
          <Searchbar />
        </div>
      </div>
      <div className='nav-right'>
        <ul className='nav-list'>
          {user ? (
            <>
              <li>
                {/* <Button color="blue" text="Create Event" link="createEvent" class="createEventBtn"/> */}
                <Link to='/createEvent'>
                  <button className='button createEventBtn'>
                    Create Event
                  </button>
                </Link>
              </li>
              <li>
                {/* user profile in circular frame and when clicked it show view profile and logout */}
                <UserProfile />
              </li>
            </>
          ) : (
            <li>
              <LoginButton />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// <li>
//   <div className="notificationsBtn">
//     <NotificationsNoneOutlinedIcon style={{ fontSize: '30px' }} />
//   </div>
// </li>

{
  /* <Button color='blue' text="Login" link="login" /> */
}
{
  /* <button
                className="button loginBtn"
                onClick={() => navigate('/login')}
              >
                Login
              </button> */
}
