import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../slices/auth.slice';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleMenuClose();
    dispatch(clearUser());
  };

  const handleProfileClick = () => {
    handleMenuClose();
    navigate('/user');
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title='Account settings'>
          <IconButton
            size='large'
            aria-label='user profile'
            aria-controls='user-menu'
            aria-haspopup='true'
            onClick={handleMenuOpen}
          >
            <Avatar alt={user.given_name} src={user.picture} />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        id='user-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem className='flex flex-row gap-3' onClick={handleProfileClick}>
          <Avatar sx={{ width: 24, height: 24 }} />
          <Typography variant='inherit'>View Profile</Typography>
        </MenuItem>

        <MenuItem className='flex flex-row gap-3' onClick={handleLogoutClick}>
          <LogoutIcon sx={{ ml: 1 }} />
          <Typography variant='inherit'>Logout</Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default UserProfile;
