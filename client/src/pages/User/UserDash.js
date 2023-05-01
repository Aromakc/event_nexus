import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineAccountBox, MdVerified } from 'react-icons/md';

export default function UserDash() {
  const [isOrganizer, setOrganizer] = React.useState(false);
  return (
    <main className="flex">
      <nav className="flex flex-col items-start justify-start gap-5 bg-primary text-white p-4 w-1/5 h-screen">
        <h1 className="text-[4rem] font-bold pl-2">User Dashboard</h1>
        <hr className="w-full border-2 border-white my-4" />
        <NavLink
          to={':id'}
          className="flex items-center p-2 hover:pl-6 transition-all duration-300"
        >
          <MdOutlineAccountBox style={{ fontSize: '2.5rem' }} />
          <span className="ml-2">Your Profile</span>
        </NavLink>

        {isOrganizer ? (
          <span className="flex items-center p-2 hover:text-yellow-300 transition-all duration-300">
            <MdVerified style={{ fontSize: '2.5rem' }} />
            <span className="ml-2">Verified</span>
          </span>
        ) : (
          <NavLink
            to={'verify'}
            className="flex items-center p-2 hover:pl-6 transition-all duration-300"
          >
            <MdVerified style={{ fontSize: '2.5rem' }} />
            <span className="ml-2">Verify as Organizer</span>
          </NavLink>
        )}
      </nav>
      <div className="w-4/5 p-4">
        <Outlet />
      </div>
    </main>
  );
}
