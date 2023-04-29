import React from 'react';
import Slider from 'react-slick';
import HeroContent from './HeroContent';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const events = [
    {
      id: 1,
      title: 'Art Show',
      poster:
        'https://venngage-wordpress.s3.amazonaws.com/uploads/2022/01/Cultural-Event-Poster-Design.png',
      organizer: 'KUCC',
    },
    {
      id: 2,
      title: 'Company Event',
      poster:
        'https://venngage-wordpress.s3.amazonaws.com/uploads/2022/01/Company-Remote-Team-Building-Event-Poster-Design-Template.png',
      organizer: 'KUCC',
    },
    {
      id: 3,
      title: 'Job Expo',
      poster:
        'https://venngage-wordpress.s3.amazonaws.com/uploads/2022/01/Job-Expo-Event-Poster-Design.png',
      organizer: 'KUCC',
    },
    {
      id: 4,
      title: 'Tutoring',
      poster:
        'https://venngage-wordpress.s3.amazonaws.com/uploads/2022/01/Colorful-Free-Tutoring-Event-Poster-Design-Template.png',
      organizer: 'KUCC',
    },
    {
      id: 5,
      title: 'Healthcare Services',
      poster:
        'https://venngage-wordpress.s3.amazonaws.com/uploads/2022/01/Patient-Symptoms-Healthcare-Services-Event-Poster-Design-Template.png',
      organizer: 'KUCC',
    },

    {
      id: 6,
      title: 'Healthcare Event',
      poster:
        'https://venngage-wordpress.s3.amazonaws.com/uploads/2022/01/Healthcare-Event-Poster-Design.png',
      organizer: 'KUCC',
    },
  ];
  return (
    <section>
      <Slider {...settings}>
        {events.map((event) => (
          <HeroContent key={event.id} {...event} />
        ))}
      </Slider>
    </section>
  );
}
