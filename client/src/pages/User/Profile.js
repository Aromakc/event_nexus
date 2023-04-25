import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <section>
      <div>Left</div>
      <Outlet />
    </section>
  );
}
