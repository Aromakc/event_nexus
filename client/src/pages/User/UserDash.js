import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function UserDash() {
  return (
    <main className='flex justify-start items-start'>
      <div className='flex flex-col items-start justify-start bg-primary text-white p-4 w-1/5 fixed '>
        <NavLink
          to={''}
          //   style={({ isActive }) =>
          //     isActive
          //       ? {
          //           // borderLeftWidth: '4px',
          //           // borderLeftColor: 'primary',
          //           // paddingLeft: '1rem',
          //         }
          //       : undefined
          //   }
          className={
            'p-2 hover:pl-6 hover:underline underline-offset-4 transition-all duration-300'
          }
        >
          Profile
        </NavLink>
        <NavLink
          to={'verify'}
          style={({ isActive }) =>
            isActive
              ? {
                  borderLeftWidth: '4px',
                  borderLeftColor: 'primary',
                  paddingLeft: '1rem',
                }
              : undefined
          }
          className={
            'p-2 hover:pl-6 hover:underline underline-offset-4 transition-all duration-300'
          }
        >
          Verify as Organizer
        </NavLink>
      </div>
      <div className='ml-24 '>
        <Outlet />
      </div>
    </main>
  );
}
