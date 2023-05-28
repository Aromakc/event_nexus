import React from 'react';
import Card from '../components/card';
import Hero from '../components/Hero/Hero';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {  selectAllPosts } from '../slices/posts.slice';
const Home = () => {

  const posts = useSelector(selectAllPosts);

  //filtering posts based on date
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().substring(0, 10);

  const [ongoingPosts, setOngoingPosts] = useState([]);
  const [pastPosts, setPastPosts] = useState([]);
  const [upcomingPosts, setUpcomingPosts] = useState([]);

  useEffect(() => {
    const filteredPastPosts = posts.filter((post) => {
      return (
        post.dateStarts < currentDateString && post.dateEnds < currentDateString
      );
    });
    setPastPosts(filteredPastPosts);

    const filteredOngoingPosts = posts.filter((post) => {
      return (
        post.dateStarts <= currentDateString &&
        post.dateEnds >= currentDateString
      );
    });
    setOngoingPosts(filteredOngoingPosts);

    const filteredUpcomingPosts = posts.filter((post) => {
      return post.dateStarts > currentDateString;
    });
    setUpcomingPosts(filteredUpcomingPosts);
  }, [posts, currentDateString]);

  // //print posts title
  // const ongoingPosts = posts.filter((post) => {
  //   return post.dateStarts <= currentDateString && post.dateEnds >= currentDateString;
  // });

  // const pastPosts = posts.filter((post) => {
  //   return post.dateEnds < currentDate;
  // });
  // const upcomingPosts = posts.filter((post) => {
  //   return post.dateStarts > currentDate;
  // });

  // console.log(ongoingPosts, pastPosts, upcomingPosts)
  return (
    <main>
      <div className='px-[5rem] py-2'>
        <div className='h-4/5 mt-4 mb-12'>
          <Hero events = {ongoingPosts} />
        </div>
        <hr className='border-t-2 border-gray my-4' />
        <h2 className='text-3xl font-semibold text-zinc-700 my-10'>
          Upcoming Events
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
          {upcomingPosts.length > 0 ? (
            upcomingPosts.map((post) => {
              return <Card key={post.id} {...post} />;
            })
          ) : (
            <p>No upcoming events</p>
          )}
        </div>

        <hr className='border-t-2 border-gray my-4' />
        <h2 className='text-3xl font-semibold text-zinc-700 my-10'>
          {' '}
          Past Events
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
          {pastPosts.length > 0 ? (
            pastPosts.map((post) => {
              return <Card key={post.id} {...post} />;
            })
          ) : (
            <p>No past events</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
