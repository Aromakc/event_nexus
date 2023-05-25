import React from 'react';
import jwt_decode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearUser,
  setLoading,
  setUser,
  selectLoading,
} from '../slices/auth.slice';
import { addUser, selectUserById } from '../slices/users.slice';
import axios from 'axios';

const handleAddUser = (googleCredentialRes, userId) => {
  const { id, email, name, picture } = googleCredentialRes;
  if (userId && userId !== id) {
    console.log(`Welcome ${name}!`);
    return;
  } else {
    const userData = {
      id,
      email,
      name,
      picture,
    };
    return userData;
  }
};

const LoginButton = () => {
  const dispatch = useDispatch();
  const userId ='';
  // const userId = useSelector();
  const loading = useSelector(selectLoading);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <GoogleLogin
      onSuccess={(response) => {
        const decoded = jwt_decode(response.credential);

        const userData = handleAddUser(decoded, userId);
        if (userData) {
          dispatch(addUser(userData));
        }

        dispatch(setUser(decoded));
        dispatch(setLoading(false));
      }}
      onFailure={(response) => {
        console.log(response);
        dispatch(setLoading(false));
      }}
      type='standard'
      theme='filled_blue'
      text='signin'
      shape='pill'
    />
  );
};

const LogoutButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(clearUser())}>Logout</button>;
};

export { LoginButton, LogoutButton };
