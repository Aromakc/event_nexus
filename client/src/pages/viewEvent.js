import React from 'react';

const ViewEvent = (props) => {
  return (
    <main className="bg-neutral-50 p-10 h-screen">
      <div className="flex justify-between mx-20 px-6 py-6 bg-white drop-shadow-md">
        <div className="flex flex-col px-4">
          <h1 className="flex text-5xl mb-4 font-medium">
            Exploring as Freelancer
          </h1>
          <div className="flex mb-6">
            <span className="text-xl pr-3">Organized by:</span>
            <span className="text-xl text-blue-600">
              Kathmandu University Computer Club
            </span>
          </div>
          <div className="flex mb-6">
            <div className="flex flex-row mr-10">
              <div className="flex pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  color="var(--primary-color)"
                >
                  <path
                    fill="currentColor"
                    d="M8 14q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm4 0q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm4 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xl font-medium mb-2">Date</div>
                <div className="text-xl text-stone-600 mb-2">
                  April 26,2023,Wed
                </div>
              </div>
            </div>
            <div className="flex flex-row mr-10">
              <div className="flex pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  color="var(--primary-color)"
                >
                  <path
                    fill="currentColor"
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71l-1.42 1.41z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xl font-medium mb-2">Date</div>
                <div className="text-xl text-stone-600 mb-2">
                  April 26,2023,Wed
                </div>
              </div>
            </div>
            <div className="flex flex-row mr-10">
              <div className="flex pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  color="var(--primary-color)"
                >
                  <path
                    fill="currentColor"
                    d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.4-1.8 5.163t-5.45 5.987q-.15.125-.35.2t-.4.075Z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xl font-medium mb-2">Venue</div>
                <div className="text-xl text-stone-600 mb-2">
                  Block 9, Room 404
                </div>
              </div>
            </div>
          </div>
          <button className="bg-rose-600 hover:bg-rose-700 text-white text-2xl font-semibold p-4 rounded-lg w-1/4">
            Register
          </button>
        </div>
        <div className="flex px-4 w-100 h-80">
          <img
            src="thumbnail1.png"
            className="w-full h-full object-cover"
          ></img>
        </div>
      </div>

      <div className="mx-20 my-10 px-6 py-6 bg-white drop-shadow-md">
        <h1 className="text-5xl mb-4 font-medium">About this event</h1>
        <p className="text-2xl">
          We would like to invite you to an upcoming event about exploring
          freelancing as a student and earning more than what you pay for your
          college. The event will be focused on two popular freelance platforms:
          Upwork and Fiverr, and how students can leverage them to earn money
          while still studying. <br />
          Our guest speaker, Sailesh Dahal , is an alumnus who has been
          freelancing for more than 3 years. He is a top rated freelancer on
          Upwork has earned just over $30000 in year 2022.He will share valuable
          insights and strategies on how to succeed as a freelancer, including
          tips on how to get started, how to get more clients, how to spot red
          flags, and how to shine as a great freelancer, He will provide
          practical advice that can help you kickstart your freelance career.He
          is a top rated freelancer on Upwork We believe this event will be
          extremely beneficial for students who are interested in exploring
          freelancing as a means of earning income while still studying.
          <br />
          You can checkout the following website to know about the Speaker.
          <a href="#" className="text-blue-500">
            http://saileshdahal.com.np
          </a>
        </p>
      </div>
    </main>
  );
};

export default ViewEvent;
