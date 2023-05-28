import React from 'react';
import Slider from 'react-slick';
import HeroContent from './HeroContent';
import { Location } from 'react-router-dom';
export default function Hero(props) {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const events = props.events;
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
