import React from 'react';
import jwt_decode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setLoading, setUser } from '../slices/auth.slice';

const LoginButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <GoogleLogin
      onSuccess={(response) => {
        const decoded = jwt_decode(response.credential);
        console.log(decoded);
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
