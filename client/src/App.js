import React from 'react';
import './styles/App.css';
import Layout from './components/layout';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home';
import CreateEvent from './pages/createEvent';
import ViewEvent from './pages/viewEvent';
import Verify from './pages/User/Verify';
import UserDash from './pages/User/UserDash';
import Profile from './pages/User/Profile';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/createEvent' element={<CreateEvent />} />
        <Route path='/event/:id' element={<ViewEvent />} />
        <Route path='/user' element={<UserDash />}>
          <Route path=':id' element={<Profile />} />
          <Route path='verify' element={<Verify />} />
        </Route>
      </Route>

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
